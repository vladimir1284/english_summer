export async function getDB() {
  try {
    // @ts-ignore
    const { env } = await import('cloudflare:workers');
    console.log("[DEBUG getDB] env keys:", Object.keys(env || {}));
    if (env && env.DB) {
      console.log("[DEBUG getDB] env.DB type:", typeof env.DB);
      console.log("[DEBUG getDB] env.DB keys:", Object.keys(env.DB));
      const proto = Object.getPrototypeOf(env.DB);
      console.log("[DEBUG getDB] env.DB proto:", proto);
      if (proto) {
        console.log("[DEBUG getDB] env.DB proto keys:", Object.getOwnPropertyNames(proto));
      }
      return env.DB;
    }
  } catch (e: any) {
    console.log("[DEBUG getDB] cloudflare:workers import failed:", e.message);
  }

  throw new Error('D1 Database binding (DB) not found in Cloudflare environment.');
}
