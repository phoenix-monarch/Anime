import type { PageServerLoad } from "../$types";


export const load: PageServerLoad = async ({ locals }) => {

    const some = await locals.gogo.enime_getStreaming("cl6l47ql108582ekc6y16c1jj")

    console.log(some)

    return {

    }
}