import type { PageServerLoad } from "../$types";


export const load: PageServerLoad = async ({ locals, url }) => {

    const page = Number(url.searchParams.get("page")) || 1

    const get_popular = async (page = 1) => {
        const popular = await locals.gogo.popular(page)
        return popular
    }

    if (page) {
        return {
            popular: get_popular(page),
            page,
        }
    }


    return {
        popular: get_popular(),
        page,
    }
}