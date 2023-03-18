import type { PageServerLoad } from "../../$types";



export const load: PageServerLoad = async ({ locals, params }) => {
    // @ts-ignore
    const genre = params.genre

    async function get_anime_by_genre(genre: any, page = 1) {
        const genre_animes = await locals.gogo.by_genre(genre, page)
        return genre_animes
    }


    return {
        genre_animes: get_anime_by_genre(genre),
        genre,
    }
}