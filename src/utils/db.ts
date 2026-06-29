export async function getDB() {
  try {
    // @ts-ignore
    const { env } = await import('cloudflare:workers');
    if (env && env.DB) {
      return env.DB;
    }
  } catch (e: any) {
    console.log("[DEBUG getDB] cloudflare:workers import failed:", e.message);
  }

  throw new Error('D1 Database binding (DB) not found in Cloudflare environment.');
}
