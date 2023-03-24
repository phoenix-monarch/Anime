import axios from "axios";


export class AnimeProvider {
    base: string = "https://api.consumet.org/meta/anilist"
    async search(query: string, page = 1) {
        const url = `${this.base}/${query}.`;
        const data = await axios.get(url, {
            params: {
                page,
            }
        })
        return data.data
    }

    async advancedSearch(query: string, season: string, format: string, genres: string[], status: string, page = 1,) {
        // const url = `${this.base}/advanced-search?page=${page}${query ? "&query=" + query : ""}${season ? "&season=" + season : ""}${format ? "&format=" + format : ""}${genres.length > 0 ? "&genres=" + JSON.stringify(genres) : ""
        //     }${status ? "&status=" + status : ""} `

        const url = `${this.base}/advanced-search`
        const data = await axios(url, {
            params: {
                page,
                season,
                query,
                format,
                status,
                genres,
            }
        })

        return data.data
    }

    async AnimeInfo(id: string, provider: "9anime" | "animefox" | "animepahe" | "bilibili" | "crunchyroll" | "enime" | "gogoanime" | "marin" | "zoro" | null | undefined = "gogoanime") {
        const url = `${this.base}/info/${id}`
        const data = await axios.get(url, {
            params: {
                provider,
            }
        })
        return data.data
    }

    async getStream(episode_id: string) {
        const url = `${this.base}/watch/${episode_id}`
        const data = await axios.get(url)
        return data.data
    }

    async getRecentEpisodes(page = 1, perPage = 20, provider = "gogoanime") {
        const url = `${this.base}/recent-episodes`
        const data = await axios.get(url, {
            params: {
                page,
                perPage,
                provider,
            }
        })
        return data.data
    }

    async trending(page = 1, perPage = 20) {
        const url = `${this.base}/trending`
        const data = await axios.get(url, {
            params: {
                page,
                perPage,
            }
        })
    }

    async popular(page = 1, perPage = 20) {
        const url = `${this.base}/popular`
        const data = await axios.get(url, {
            params: {
                page,
                perPage,
            }
        })
        return data.data
    }

    async getAiringSchedule() {
        // TODO
    }
}