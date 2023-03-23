<script lang="ts">
	import CategoryAnimeCard from '$lib/components/Category/CategoryAnimeCard.svelte';
	import { page } from '$app/stores';
	import CategoryForm from '$lib/components/Category/CategoryForm.svelte';
</script>

<svelte:head>
	<title>Categories Explore</title>
</svelte:head>

<CategoryForm />

<div
	class="animes grid-cols-[repeat(auto-fill,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]"
>
	{#each $page.data.animes.results as anime}
		<CategoryAnimeCard {anime} />
	{/each}
</div>

<style>
	.animes {
		padding: 20px;
		display: grid;
		grid-row-gap: 2rem;
		grid-column-gap: 1rem;
	}
</style>
