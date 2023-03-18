import type { PageServerLoad } from "../$types";


export const load: PageServerLoad = async ({ locals, url }) => {
    const top_aired = await locals.gogo.top_airing()

    return {
        top_aired,
    }
}