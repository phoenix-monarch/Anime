import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "../$types";

export const load: PageServerLoad = async ({ locals, url }) => {
    const query = url.searchParams.get("search")

    if (!query) {
        throw redirect(300, "/")
    }
    const animes = await locals.gogo.search(query)

    return {
        searchKey: query,
        animes,
    }
}



export const actions: Actions = {
    default: async ({ request }) => {
        const query_data = (Object.fromEntries(await request.formData())).q

        if (!query_data) {
            throw redirect(300, '/')
        }

        throw redirect(300, `/search?search=${query_data}`)
    }
};