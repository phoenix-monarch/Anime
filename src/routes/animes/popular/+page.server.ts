import type { PageServerLoad } from "../$types";


export const load: PageServerLoad = async ({ locals, url }) => {
    const get_popular = async () => {
        return await locals.anime.popular()
    }


    return {
        popular: get_popular(),
    }
}