import type { PageServerLoad } from "../$types";


export const load: PageServerLoad = async ({ locals }) => {

    const getPopular = async () => {
        return await locals.anime.popular()
    }

    const trending = async () => {
        return await locals.anime.trending()
    }

    const recentAdded = async () => {
        return await locals.gogo.recent_episodes()
    }

    return {
        trendingAnimes: trending(),
        recentAnimes: recentAdded(),
    }
}