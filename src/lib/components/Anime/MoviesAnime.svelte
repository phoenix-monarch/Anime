<script lang="ts">
	import AnimeCard from '$lib/Widgets/AnimeCard.svelte';
	export let movies: any;
</script>

<section class="movies-animes">
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

<style>
	.movies-animes {
		padding: 20px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-row-gap: 2rem;
		grid-column-gap: 1rem;
	}
</style>
