import type { PageServerLoad } from "../../$types";



export const load: PageServerLoad = async ({ locals, params, url }) => {
    const genre = params.genre
    const page = Number(url.searchParams.get("page"))

    async function get_anime_by_genre(genre: any, page = 1) {
        const genre_animes = await locals.gogo.by_genre(genre)
        return genre_animes
    }

    if (page) {
        return {
            genre_animes: get_anime_by_genre(genre, page),
            page,
        }
    }

    return {
        genre_animes: get_anime_by_genre(genre),
        page,
    }
}