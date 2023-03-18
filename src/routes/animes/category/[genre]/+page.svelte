<script lang="ts">
	import AnimeCard from '$lib/Widgets/AnimeCard.svelte';
	import { page } from '$app/stores';
	import { GogoAnime } from '$lib/providers';

	$: genre_animes = $page.data.genre_animes;

	let anime_page = 2;

	async function load_more() {
		const gogo = new GogoAnime();
		const data = await gogo.by_genre($page.data.genre, anime_page);
		anime_page++;
		genre_animes = [...genre_animes, ...data];
	}
</script>

<svelte:head>
	<title>Category Animes</title>
</svelte:head>

<!-- <pre>{JSON.stringify($page.data, null, 2)}</pre> -->

<div id="top" />

<section class="popular-animes">
	{#await genre_animes}
		Loading ...
	{:then value}
		{#each value as anime}
			<AnimeCard is_popular={true} {anime} />
		{/each}
	{:catch error}
		{error}
	{/await}
</section>

<div class="my-5 flex justify-center items-center">
	<button class="btn variant-filled-primary" on:click={load_more}>
		<i class="ti ti-dots-circle-horizontal mr-3" />
		Still Need More ...
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
