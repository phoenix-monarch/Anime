import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async ({ locals, params }) => {
    const query = params.query
    if (!query) {
        throw redirect(300, "/")
    }
    const animes = async () => {
        return await locals.anime.search(query)
    }

    return {
        animes: animes(),
        query,
    }
}