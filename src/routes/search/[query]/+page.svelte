<script lang="ts">
	import DefaultCard from '$lib/components/Anilist/DefaultCard.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Search Results : {$page.data.query}</title>
</svelte:head>

<!-- <pre>{JSON.stringify($page.data.animes, null, 2)}</pre> -->

<section
	class="animes grid-cols-[repeat(auto-fill,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]"
>
	{#each $page.data.animes.results as anime, i}
		<!-- <AnimeCard {i} {anime} /> -->
		<DefaultCard {anime} />
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
