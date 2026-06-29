import type { APIRoute } from 'astro';
import { getDB } from '../../utils/db';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const { name, avatar } = await request.json();

    if (!name || !avatar) {
      return new Response(JSON.stringify({ error: 'Name and avatar are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const db = await getDB();

    // Insert user and get ID using RETURNING clause
    const user = await db.prepare(
      'INSERT INTO users (name, avatar) VALUES (?, ?) RETURNING id'
    )
    .bind(name.trim(), avatar.trim())
    .first<{ id: number }>();

    if (!user) {
      throw new Error('Failed to create user');
    }

    // Seed progress for weeks 1 to 8 in a batch transaction
    const statements = [];
    for (let week = 1; week <= 8; week++) {
      statements.push(
        db.prepare('INSERT INTO progress (user_id, week, completed) VALUES (?, ?, 0)')
          .bind(user.id, week)
      );
    }
    await db.batch(statements);

    return new Response(JSON.stringify({ success: true, userId: user.id }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    // Handle unique constraint or other errors
    const message = error.message.includes('UNIQUE constraint failed')
      ? 'A family member with this name already exists'
      : error.message;

    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
