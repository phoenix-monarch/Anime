import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ locals, url, params }) => {
    const episode_id = params.id
    const server = url.searchParams.get("server")

    const f = episode_id.at(0)?.toUpperCase()
    const remaining = episode_id.slice(1)
    const title = f + remaining

    const anime_name = episode_id.split("-episode-")[0]
    const anime = await locals.gogo.get_anime(anime_name)

    console.log(anime)
    const episode = await locals.gogo.get_stream_link(episode_id)
    return {
        title: title.replaceAll('-', " "),
        episode_id,
        episode,
        anime,
    }
}