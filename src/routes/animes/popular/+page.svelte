<script lang="ts">
	import AnimeCard from '$lib/Widgets/AnimeCard.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Popular Animes</title>
</svelte:head>

<section class="popular-animes">
	{#each $page.data.popular_animes.results as anime}
		<AnimeCard is_popular={true} {anime} />
	{/each}
</section>

<style>
	.popular-animes {
		padding: 20px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-row-gap: 2rem;
		grid-column-gap: 1rem;
	}
</style>
