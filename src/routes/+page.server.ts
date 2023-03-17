import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ locals, url }) => {
    const page = url.searchParams.get("page")

    const recent_episodes = async (page = 1) => {
        const recent_episodes = await locals.gogo.recent_episodes(Number(page))
        return recent_episodes;
    }

    if (page) {
        return {
            recent_episodes: recent_episodes(Number(page))
        }
    }

    return {
        recent_episodes: recent_episodes(),
    }
}