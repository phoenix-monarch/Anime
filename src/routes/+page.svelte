<script lang="ts">
	import Carousel from '$lib/Widgets/Carousel.svelte';
	import { page } from '$app/stores';
	import { inview } from 'svelte-inview';
	import RecentAnime from '$lib/components/Anime/RecentAnime.svelte';
	import { GogoAnime } from '$lib/providers';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
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
	<title>Animes UI | Skeleton</title>
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

<div class="my-5 flex justify-center items-center">
	<button class="btn variant-filled-primary" on:click={load_more}>
		<i class="ti ti-dots-circle-horizontal mr-3" />
		{#if is_loading}
			<div class="h-5">
				<ProgressRadial width={'w-6'} />
			</div>
		{:else}
			Still Need More ...
		{/if}
	</button>
</div>
