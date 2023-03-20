import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ locals, params, url }) => {
    const episode_id = params.id
    const anime_id = url.searchParams.get('anime-id')

    const anime = async (anime_id: any) => {
        const data = await locals.gogo.enime_getAnimeInfo(anime_id)
        return data
    }

    const episode = async (episode_id: any) => {
        const data = await locals.gogo.enime_getStreaming(episode_id)
        return data
    }

    return {
        episode: episode(episode_id),
        anime: anime(anime_id),
        current_episode_id: episode_id,
    }
}