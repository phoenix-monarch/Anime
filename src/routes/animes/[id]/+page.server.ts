import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ locals, params }) => {
    const id = params.id

    const anime = async () => {
        return await locals.anime.AnimeInfo(id)
    }

    return {
        anime: anime(),
    }
} 