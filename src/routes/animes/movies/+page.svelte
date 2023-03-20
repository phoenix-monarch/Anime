<script lang="ts">
	import LoadMore from '$lib/Widgets/LoadMore.svelte';
	import MoviesAnime from '$lib/components/Anime/MoviesAnime.svelte';
	import { page } from '$app/stores';
	import { inview } from 'svelte-inview';
	import { GogoAnime } from '$lib/providers';
	$: movies = $page.data.movies;
	$: is_loading = false;
	let anime_page = 2;

	async function load_more() {
		is_loading = true;
		const gogo = new GogoAnime();
		const data = await gogo.anime_movies(anime_page);
		anime_page++;
		movies = [...movies, ...data];
		is_loading = false;
	}
</script>

<svelte:head>
	<title>Anime Movies</title>
</svelte:head>

<MoviesAnime {movies} />

<div use:inview on:change={load_more} />

<LoadMore {is_loading} on:click={load_more} />

<style>
</style>
