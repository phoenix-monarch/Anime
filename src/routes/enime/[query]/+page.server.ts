import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ locals, params }) => {
    const query = params.query

    const anime = await locals.gogo.enime_getSearch1st(query)

    const episodes = async (anime: any) => {
        const data = await locals.gogo.enime_getAnimeEpisode(anime.id)
        return data.reverse()
    }

    return {
        anime,
        episodes: episodes(anime),
    }
}