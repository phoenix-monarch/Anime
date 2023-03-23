<script lang="ts">
	import AnimeCard from '$lib/Widgets/AnimeCard.svelte';

	export let genre_animes: any;
</script>

<section
	class="genre-animes grid-cols-[repeat(auto-fill,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]"
>
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

<style>
	.genre-animes {
		padding: 20px;
		display: grid;
		grid-row-gap: 2rem;
		grid-column-gap: 1rem;
	}
</style>
