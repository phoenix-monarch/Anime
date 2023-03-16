import type { PageServerLoad } from "../$types";


export const load: PageServerLoad = async ({ locals, url }) => {

    const page = Number(url.searchParams.get("page"))

    if (page) {
        const top_aired = await locals.gogo.top_airing(page)
        return {
            top_aired,
        }
    }

    const top_aired = await locals.gogo.top_airing()

    return {
        top_aired,
    }
}