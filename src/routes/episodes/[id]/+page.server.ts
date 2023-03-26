import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ locals, params, url }) => {
    const episode_id = params.id
    const anime_id = url.searchParams.get("anime")

    // @ts-ignore
    const anime = await locals.anime.AnimeInfo(anime_id)


    const episodeData = async () => {
        return await locals.anime.getEpisodeData(anime, episode_id)
    }

    const episode = async () => {
        return await locals.anime.getStream(episode_id)
    }

    const servers = async () => {
        try {
            return await locals.gogo.get_servers(episode_id)
        } catch (error) {
            console.log(error)
        }
    }

    return {
        anime,
        episode: episode(),
        servers: servers(),
        episodeData: episodeData(),
        current_id: episode_id,
        anime_id,
    }
}