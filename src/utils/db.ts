export async function getDB(locals?: any) {
  // 1. Try to get D1 from Astro/Cloudflare locals runtime env (standard way in Astro)
  if (locals && locals.runtime && locals.runtime.env && locals.runtime.env.DB) {
    return locals.runtime.env.DB;
  }

  // 2. Fallback to global/cloudflare:workers import
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
