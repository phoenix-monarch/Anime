<script lang="ts">
	import Carousel from '$lib/Widgets/Carousel.svelte';
	import Paginator from '$lib/Widgets/Paginator.svelte';
	import { page } from '$app/stores';
	import Animes from '$lib/components/Anime/Animes.svelte';
	import { GogoAnime } from '$lib/providers';

	$: animes = $page.data.recent_episodes;

	let anime_page = 2;

	async function load_more() {
		const gogo = new GogoAnime();
		const data = await gogo.recent_episodes(anime_page);
		anime_page++;
		animes.results = [...animes.results, ...data.results];
	}
</script>

<svelte:head>
	<title>Animes UI | Skeleton</title>
</svelte:head>

{#await $page.data.trending_animes}
	waiting ...
{:then value}
	<Carousel results={value.results} />
{:catch error}
	{error}
{/await}

{#await animes}
	Loading Now ...
{:then value}
	<Animes animes={value.results} />
{:catch error}
	{error}
{/await}

<div class="my-5 flex justify-center items-center">
	<button class="btn variant-filled-primary" on:click={load_more}>
		<i class="ti ti-dots-circle-horizontal mr-3" />
		Still Need More ...
	</button>
</div>
