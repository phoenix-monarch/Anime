import type { PageServerLoad } from "../$types";


export const load: PageServerLoad = async ({ locals, url }) => {
    const status = url.searchParams.get("status")
    const season = url.searchParams.get("season")
    const format = url.searchParams.get("format")
    const genres = url.searchParams.getAll("genre")
    const animes = await locals.anilist.advancedSearch(season, format, genres, status)

    return {
        animes
    }
}