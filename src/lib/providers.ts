

export class GogoAnime {
    base: string = "https://api.consumet.org/anime/gogoanime";
    base_2: string = "https://webdis-8amq.onrender.com"
    base_3: string = "https://api.consumet.org/anime/enime";


    async search(query: string, page = 1) {
        const data = await fetch(`${this.base}/${query}?page=${page}`)
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


    // Provider 2 

    async popular(page = 1) {
        const data = await fetch(`${this.base_2}/popular?page=${page}`)
        return await data.json()
    }

    async anime_movies(page = 1) {
        const data = await fetch(`${this.base_2}/anime-movies?page=${page}`)
        return await data.json()
    }

    async by_genre(genre: string, page = 1) {
        const data = await fetch(`${this.base_2}/genre/${genre}?page=${page}`)
        return await data.json()
    }

    // Provider 3

    async enime_search(query: string, page = 1) {
        const data = await fetch(`${this.base_3}/${query}?page=${page}`)
        return await data.json()
    }

    async enime_getSearch1st(query: string, page = 1) {
        const data = await fetch(`${this.base_3}/${query}?page=${page}`)
        return (await data.json()).results[0]
    }

    async enime_getSearch1st_id(query: string, page = 1) {
        const data = await fetch(`${this.base_3}/${query}?page=${page}`)
        return (await data.json()).results[0].id
    }

    async enime_getAnimeInfo(id: string) {
        const data = await fetch(`${this.base_3}/info?id=${id}`)
        return await data.json()
    }

    async enime_getAnimeEpisode(id: string) {
        const data = await fetch(`${this.base_3}/info?id=${id}`)
        return (await data.json()).episodes
    }

    async enime_getStreaming(episode_id: string) {
        const data = await fetch(`${this.base_3}/watch?episodeId=${episode_id}`)
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


    async trending(perPage = 10, page = 1) {
        const data = await fetch(`${this.base}/trending?page=${page}&perPage=${perPage}`)
        return await data.json()
    }

    async popular(perPage = 30, page = 1) {
        const data = await fetch(`${this.base}/popular?page=${page}&perPage=${perPage}`)
        return await data.json()
    }

    async advancedSearch(query: string, season: string, format: string, genres: string[], status: string, page = 1,) {
        const url = `${this.base}/advanced-search?page=${page}${query ? "&query=" + query : ""}${season ? "&season=" + season : ""}${format ? "&format=" + format : ""}${genres.length > 0 ? "&genres=" + JSON.stringify(genres) : ""
            }${status ? "&status=" + status : ""} `
        const data = await fetch(url)
        return await data.json()
    }
}

