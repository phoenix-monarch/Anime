<script lang="ts">
	import AnimeCard from '$lib/Widgets/AnimeCard.svelte';

	export let popular: any;
</script>

<section
	class="popular-animes grid-cols-[repeat(auto-fill,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]"
>
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
		grid-row-gap: 2rem;
		grid-column-gap: 1rem;
	}
</style>
