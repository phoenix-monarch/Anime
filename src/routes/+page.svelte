<script lang="ts">
	import LoadMore from './../lib/Widgets/LoadMore.svelte';
	import Carousel from '$lib/Widgets/Carousel.svelte';
	import { page } from '$app/stores';
	import { inview } from 'svelte-inview';
	import RecentAnime from '$lib/components/Anime/RecentAnime.svelte';
	import { GogoAnime } from '$lib/providers';
	import type { PageData } from './$types';

	export let data: PageData;

	$: animes = $page.data.recent_episodes;
	$: is_loading = false;
	let anime_page = 2;

	async function load_more() {
		is_loading = true;
		const gogo = new GogoAnime();
		const data = await gogo.recent_episodes(anime_page);
		anime_page++;
		animes.results = [...animes.results, ...data.results];
		is_loading = false;
	}
</script>

<svelte:head>
	<title>Recent Added Episode</title>
</svelte:head>

{#await data.trending_animes}
	waiting ...
{:then value}
	<Carousel results={value.results} />
{:catch error}
	{error}
{/await}

{#await animes}
	Loading Now ...
{:then value}
	<RecentAnime animes={value.results} />
	<div use:inview on:change={load_more} />
{:catch error}
	{error}
{/await}

<LoadMore {is_loading} on:click={load_more} />
