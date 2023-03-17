<script lang="ts">
	import PopularPaginator from '$lib/Widgets/PopularPaginator.svelte';
	import AnimeCard from '$lib/Widgets/AnimeCard.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Popular Animes</title>
</svelte:head>

<pre>{JSON.stringify($page.data, null, 2)}</pre>

<section class="popular-animes">
	{#each $page.data.popular as anime}
		<AnimeCard is_popular={true} {anime} />
	{/each}
</section>
<PopularPaginator page={$page.data.page} />

<style>
	.popular-animes {
		padding: 20px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-row-gap: 2rem;
		grid-column-gap: 1rem;
	}
</style>
