import type { PageServerLoad } from "../$types";


export const load: PageServerLoad = async ({ locals }) => {

    const popular_animes = await locals.anilist.popular(100)
    return {
        popular_animes
    }
}