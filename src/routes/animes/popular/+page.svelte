<script lang="ts">
	import LoadMore from '$lib/Widgets/LoadMore.svelte';
	import PopularAnime from '$lib/components/Anime/PopularAnime.svelte';
	import { page } from '$app/stores';
	import { inview } from 'svelte-inview';
	import { GogoAnime } from '$lib/providers';

	$: popular = $page.data.popular;
	$: is_loading = false;
	let anime_page = 2;

	async function load_more() {
		is_loading = true;
		const gogo = new GogoAnime();
		const data = await gogo.popular(anime_page);
		anime_page++;
		popular = [...popular, ...data];
		is_loading = false;
	}
</script>

<svelte:head>
	<title>Popular Animes</title>
</svelte:head>

<div id="top" />

<PopularAnime {popular} />
<div use:inview on:change={load_more} />

<LoadMore {is_loading} on:click={load_more} />

<style>
</style>
