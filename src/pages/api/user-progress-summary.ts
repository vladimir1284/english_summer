import type { APIRoute } from 'astro';
import { getDB } from '../../utils/db';

export const GET: APIRoute = async ({ request, locals }) => {
  try {
    const url = new URL(request.url);
    const userIdParam = url.searchParams.get('user_id');

    if (!userIdParam) {
      return new Response(JSON.stringify({ error: 'Missing user_id parameter' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const userId = parseInt(userIdParam, 10);
    if (isNaN(userId)) {
      return new Response(JSON.stringify({ error: 'Invalid user_id parameter' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const db = await getDB();

    // Count completed weeks for this user
    const result = await db.prepare(
      'SELECT COUNT(*) as count FROM progress WHERE user_id = ? AND completed = 1'
    )
    .bind(userId)
    .first<{ count: number }>();

    const completedCount = result?.count ?? 0;

    return new Response(JSON.stringify({ completedCount }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.log("[ERROR] user-progress-summary:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
