import type { PageServerLoad } from "../$types";


export const load: PageServerLoad = async ({ locals, url }) => {

    const page = Number(url.searchParams.get("page")) || 1

    if (page) {
        const popular = await locals.gogo.popular(page)
        console.log(popular)
        return {
            popular,
            page,
        }
    }


    const popular = await locals.gogo.popular()


    return {
        popular,
        page,
    }
}