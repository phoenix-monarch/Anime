import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ locals, url, params }) => {
    const episode_id = params.id
    // const server = url.searchParams.get("server")

    const f = episode_id.at(0)?.toUpperCase()
    const remaining = episode_id.slice(1)
    const title = f + remaining

    const anime_name = episode_id.split("-episode-")[0]

    async function getServer(episode_id: any) {
        const servers = await locals.gogo.get_servers(episode_id)
        return servers
    }


    async function getName(anime_name: any) {
        const anime = await locals.gogo.get_anime(anime_name)
        return anime
    }

    async function getEpisode(episode_id: any) {
        const episode = await locals.gogo.get_stream_link(episode_id)

        return episode
    }

    // const episode = await locals.gogo.get_stream_link(episode_id)
    return {
        title: title.replaceAll('-', " "),
        episode_id,
        episode: getEpisode(episode_id),
        anime: getName(anime_name),
        servers: getServer(episode_id),
    }
}