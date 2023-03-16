
enum servers {
    "gogocdn",
    "streamsb",
    "vidstreaming"
}

export class GogoAnime {
    base: string = "https://api.consumet.org/anime/gogoanime";

    async search(query: string, page = 1) {
        const data = await fetch(`${this.base}/${query}?${page}`)
        return await data.json()
    }

    async recent_episodes(page = 1, type = 1) {
        const data = await fetch(`${this.base}/recent-episodes?page=${page}&type=${type}`)
        return await data.json()
    }

    async top_airing(page = 1) {
        const data = await fetch(`${this.base}/top-airing?page=${page}`)
        return await data.json()
    }

    async get_anime(id: string) {
        const data = await fetch(`${this.base}/info/${id}`)
        return await data.json()
    }

    async get_stream_link(episode_id: string, server: string = "gogocdn") {
        const data = await fetch(`${this.base}/watch/${episode_id}?server=${server}`)
        return await data.json()
    }

    async get_servers(episode_id: string) {
        const data = await fetch(`${this.base}/servers/${episode_id}`)
        return await data.json()
    }
}


export class Anilist {
    base = "https://api.consumet.org/meta/anilist"

    async search(query: string) {
        const data = await fetch(`${this.base}/${query}`)
        return await data.json()
    }

    async search_one(query: string) {
        const data = await (await fetch(`${this.base}/${query}`)).json()
        return data.results[0]
    }


    async trending(perPage = 30, page = 1) {
        const data = await fetch(`${this.base}/trending?page=${page}&perPage=${perPage}`)
        return await data.json()
    }

    async popular(perPage = 30, page = 1) {
        const data = await fetch(`${this.base}/popular?page=${page}&perPage=${perPage}`)
        return await data.json()
    }

}
