<script lang="ts">
	import LoadMore from '$lib/Widgets/LoadMore.svelte';
	import GenreAnime from '$lib/components/Anime/GenreAnime.svelte';
	import AnimeCard from '$lib/Widgets/AnimeCard.svelte';
	import { page } from '$app/stores';
	import { inview } from 'svelte-inview';

	import { GogoAnime } from '$lib/providers';
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	$: genre_animes = $page.data.genre_animes;
	$: is_loading = false;
	let anime_page = 2;

	async function load_more() {
		is_loading = true;
		const gogo = new GogoAnime();
		const data = await gogo.by_genre($page.data.genre, anime_page);
		anime_page++;
		genre_animes = [...genre_animes, ...data];
		is_loading = false;
	}
</script>

<svelte:head>
	<title>Category Animes</title>
</svelte:head>

<div id="top" />

<GenreAnime {genre_animes} />
<div use:inview on:change={load_more} />

<LoadMore {is_loading} on:click={load_more} />

<style>
</style>
