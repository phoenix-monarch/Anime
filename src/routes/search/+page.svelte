<script lang="ts">
	import AnimeCard from '$lib/Widgets/AnimeCard.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Search UI</title>
</svelte:head>

<section
	class="animes grid-cols-[repeat(auto-fill,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]"
>
	{#each $page.data.animes.results as anime, i}
		<AnimeCard {i} {anime} />
	{/each}
</section>

<style>
	.animes {
		padding: 20px;
		display: grid;
		grid-row-gap: 2rem;
		grid-column-gap: 1rem;
	}
</style>
