<script lang="ts">
	import { page } from '$app/stores';
	import { GogoAnime } from '$lib/providers';
	import AnimeCard from '$lib/Widgets/AnimeCard.svelte';
	$: movies = $page.data.movies;

	let anime_page = 2;

	async function load_more() {
		const gogo = new GogoAnime();
		const data = await gogo.anime_movies(anime_page);
		anime_page++;
		movies = [...movies, ...data];
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
