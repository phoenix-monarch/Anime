<script lang="ts">
	import AnimeCard from '$lib/Widgets/AnimeCard.svelte';

	export let popular: any;
</script>

<section class="popular-animes">
	{#await popular}
		Loading ...
	{:then value}
		{#each value as anime}
			<AnimeCard is_popular={true} {anime} />
		{/each}
	{:catch error}
		error
	{/await}
</section>

<style>
	.popular-animes {
		padding: 20px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
		grid-row-gap: 2rem;
		grid-column-gap: 1rem;
	}
</style>
