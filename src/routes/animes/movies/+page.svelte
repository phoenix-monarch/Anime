<script lang="ts">
	import { page } from '$app/stores';
	import { inview } from 'svelte-inview';
	import { GogoAnime } from '$lib/providers';
	import AnimeCard from '$lib/Widgets/AnimeCard.svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
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

<section class="popular-animes">
	{#await movies}
		Loading ...
	{:then value}
		{#each value as anime}
			<!-- svelte-ignore missing-declaration -->
			<AnimeCard is_popular={true} {anime} />
		{/each}
	{:catch error}
		{error}
	{/await}
</section>

<div use:inview on:change={load_more} />
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

<style>
	.popular-animes {
		padding: 20px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-row-gap: 2rem;
		grid-column-gap: 1rem;
	}
</style>
