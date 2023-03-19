<script lang="ts">
	import AnimeCard from '$lib/Widgets/AnimeCard.svelte';
	import { page } from '$app/stores';
	import { inview } from 'svelte-inview';
	import { GogoAnime } from '$lib/providers';
	import { ProgressRadial } from '@skeletonlabs/skeleton';

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

<section class="popular-animes">
	{#await popular}
		Loading ...
	{:then value}
		{#each value as anime}
			<AnimeCard is_popular={true} {anime} />
			<div use:inview on:change={load_more} />
		{/each}
	{:catch error}
		error
	{/await}
</section>

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
		grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
		grid-row-gap: 2rem;
		grid-column-gap: 1rem;
	}
</style>
