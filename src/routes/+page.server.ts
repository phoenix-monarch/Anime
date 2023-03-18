import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ locals, url }) => {
    const trending_animes = async () => {
        const trending_animes = await locals.anilist.trending()
        return trending_animes
    }

    const recent_episodes = async (page = 1) => {
        const recent_episodes = await locals.gogo.recent_episodes(Number(page))
        return recent_episodes;
    }

    return {
        recent_episodes: recent_episodes(),
        trending_animes: trending_animes()
    }
}