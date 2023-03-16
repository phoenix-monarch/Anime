import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ locals, params }) => {
    const id = params.id
    let succes = true

    try {
        const anime = await locals.gogo.get_anime(id)
        return {
            anime
        }
    } catch (err) {
        console.log(err)
        succes = false
    }

    console.log("not success")

    if (!succes) {
        throw redirect(301, `/search?search=${id}`)
    }

} 