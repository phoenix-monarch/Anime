<script lang="ts">
	import AnimeCard from '$lib/Widgets/AnimeCard.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Search UI</title>
</svelte:head>

<section class="animes">
	{#each $page.data.animes.results as anime, i}
		<AnimeCard {i} {anime} />
	{/each}
</section>

<style>
	.animes {
		padding: 20px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
		grid-row-gap: 2rem;
		grid-column-gap: 1rem;
	}
</style>
