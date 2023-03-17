import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ locals, url }) => {
    const page = url.searchParams.get("page")

    if (page) {
        const recent_episodes = await locals.gogo.recent_episodes(Number(page))
        return {
            recent_episodes
        }
    }

    const recent_episodes = await locals.gogo.recent_episodes()

    return {
        recent_episodes
    }
}