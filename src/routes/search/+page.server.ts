import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "../$types";

export const load: PageServerLoad = async () => {
    throw redirect(300, "/")
}



export const actions: Actions = {
    default: async ({ request }) => {
        const query_data = (Object.fromEntries(await request.formData())).q

        if (!query_data) {
            throw redirect(300, '/')
        }

        throw redirect(300, `/search/${query_data}`)
    }
};