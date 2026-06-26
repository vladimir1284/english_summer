import type { APIRoute } from 'astro';
import { getDB } from '../../utils/db';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const { userId, week, completed } = await request.json();

    if (!userId || !week || typeof completed !== 'boolean') {
      return new Response(JSON.stringify({ error: 'Missing or invalid parameters' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const db = await getDB();

    // Use INSERT OR REPLACE to update or insert progress
    await db.prepare(
      'INSERT OR REPLACE INTO progress (user_id, week, completed) VALUES (?, ?, ?)'
    )
    .bind(userId, week, completed ? 1 : 0)
    .run();

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
