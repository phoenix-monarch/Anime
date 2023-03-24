import { AnimeProvider } from "$lib/Anilist"
import { Anilist, GogoAnime } from "$lib/providers"
import type { Handle } from "@sveltejs/kit"


export const handle: Handle = async ({ event, resolve }) => {
    event.locals.gogo = new GogoAnime()
    event.locals.anilist = new Anilist()
    event.locals.anime = new AnimeProvider()

    const response = await resolve(event)

    return response
}