import type { PageServerLoad } from "../$types";


export const load: PageServerLoad = async ({ locals }) => {
    const movies = async () => {
        const data = await locals.gogo.anime_movies()
        return data
    }

    return {
        movies: movies()
    }
}