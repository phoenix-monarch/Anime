import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ locals }) => {

    const getPopular = async () => {
        return await locals.anime.popular()
    }

    const trending = async () => {
        return await locals.anime.trending()
    }

    const recentAdded = async () => {
        return await locals.anime.getRecentEpisodes(1, 10)
    }

    return {
        // popularAnimes: getPopular(),
        trendingAnimes: trending(),
        recentAnimes: recentAdded(),
    }
}