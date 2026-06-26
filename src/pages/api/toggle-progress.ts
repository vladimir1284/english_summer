import type { APIRoute } from 'astro';
import { getDB } from '../../utils/db';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { userId, week, completed } = await request.json();

    if (!userId || !week || typeof completed !== 'boolean') {
      return new Response(JSON.stringify({ error: 'Missing or invalid parameters' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const db = await getDB();

    const value = completed ? 1 : 0;
    
    // Prepare batch statements to update both weekly progress and all 4 session states
    const stmtWeek = db.prepare(
      'INSERT OR REPLACE INTO progress (user_id, week, completed) VALUES (?, ?, ?)'
    ).bind(userId, week, value);

    const statements = [
      stmtWeek,
      db.prepare('INSERT OR REPLACE INTO session_progress (user_id, week, session_num, completed) VALUES (?, ?, 1, ?)').bind(userId, week, value),
      db.prepare('INSERT OR REPLACE INTO session_progress (user_id, week, session_num, completed) VALUES (?, ?, 2, ?)').bind(userId, week, value),
      db.prepare('INSERT OR REPLACE INTO session_progress (user_id, week, session_num, completed) VALUES (?, ?, 3, ?)').bind(userId, week, value),
      db.prepare('INSERT OR REPLACE INTO session_progress (user_id, week, session_num, completed) VALUES (?, ?, 4, ?)').bind(userId, week, value),
    ];

    await db.batch(statements);

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

