// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { AnimeProvider } from "$lib/Anilist";
import type { Anilist, GogoAnime } from "$lib/providers";

// and what to do when importing types
declare global {
	declare namespace App {
		interface Locals {
			anime: AnimeProvider,
			gogo: GogoAnime,
			anilist: Anilist,
		}
		// interface PageData {}
		// interface Error {}
		// interface Platform {}
	}
}
