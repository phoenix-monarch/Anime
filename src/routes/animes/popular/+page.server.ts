import type { PageServerLoad } from "../$types";


export const load: PageServerLoad = async ({ locals, url }) => {
    const get_popular = async (page = 1) => {
        const popular = await locals.gogo.popular(page)
        return popular
    }


    return {
        popular: get_popular(),
    }
}