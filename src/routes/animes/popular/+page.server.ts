import type { PageServerLoad } from "../$types";


export const load: PageServerLoad = async ({ locals, url }) => {

    const page = Number(url.searchParams.get("page")) || 1

    async function get_popular(page = 1) {
        const popular = await locals.gogo.popular(page)
        return popular
    }

    if (page) {
        const popular = await locals.gogo.popular(page)
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