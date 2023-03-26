<script lang="ts">
	import Popular from '$lib/components/Anilist/Popular.svelte';
	import LoadMore from '$lib/Widgets/LoadMore.svelte';
	import { page } from '$app/stores';
	import { inview } from 'svelte-inview';
	import { AnimeProvider } from '$lib/Anilist';

	$: popular = $page.data.popular.results;
	$: is_loading = false;
	let anime_page = 2;

	let sile = {};
	async function load_more() {
		is_loading = true;
		const anime = new AnimeProvider();
		const data = await anime.popular(anime_page);
		sile = data;
		anime_page++;
		popular = [...popular, ...data.results];
		is_loading = false;
	}
</script>

<svelte:head>
	<title>Popular Animes</title>
</svelte:head>

<div id="top" />
<Popular {popular} />
<div use:inview on:change={load_more} />

<LoadMore {is_loading} on:click={load_more} />

<style>
</style>
