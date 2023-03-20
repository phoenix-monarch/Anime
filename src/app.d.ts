// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { Anilist, EnimeAnime, GogoAnime } from "$lib/providers";

// and what to do when importing types
declare global {
	declare namespace App {
		interface Locals {
			gogo: GogoAnime,
			anilist: Anilist,
		}
		// interface PageData {}
		// interface Error {}
		// interface Platform {}
	}
}
