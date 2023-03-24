import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ locals }) => {

    const recent_episodes = async (page = 1) => {
        const recent_episodes = await locals.gogo.recent_episodes(Number(page))
        return recent_episodes;
    }

    return {
        recent_episodes: recent_episodes(),
    }
}