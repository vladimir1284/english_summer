import type { APIRoute } from 'astro';
import { getDB } from '../../utils/db';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const { userId, week, sessionNum, completed } = await request.json();

    if (!userId || !week || !sessionNum || typeof completed !== 'boolean') {
      return new Response(JSON.stringify({ error: 'Missing or invalid parameters' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const db = await getDB();

    const value = completed ? 1 : 0;

    // 1. Update the session progress
    await db.prepare(
      'INSERT OR REPLACE INTO session_progress (user_id, week, session_num, completed) VALUES (?, ?, ?, ?)'
    )
    .bind(userId, week, sessionNum, value)
    .run();

    // 2. Count completed sessions for this week (out of 4)
    const countResult = await db.prepare(
      'SELECT COUNT(*) as count FROM session_progress WHERE user_id = ? AND week = ? AND completed = 1'
    )
    .bind(userId, week)
    .first<{ count: number }>();

    const completedCount = countResult?.count ?? 0;
    const weekCompleted = completedCount >= 4;

    // 3. Update the overall week progress in the progress table
    await db.prepare(
      'INSERT OR REPLACE INTO progress (user_id, week, completed) VALUES (?, ?, ?)'
    )
    .bind(userId, week, weekCompleted ? 1 : 0)
    .run();

    return new Response(JSON.stringify({ 
      success: true, 
      weekCompleted,
      completedSessionsCount: completedCount
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error("[ERROR] toggle-session:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
