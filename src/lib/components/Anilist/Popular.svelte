<script lang="ts">
	import DefaultCard from '$lib/components/Anilist/DefaultCard.svelte';
	export let popular: any;
</script>

<!-- <pre>
    {JSON.stringify(popular, null, 2)}
</pre> -->

<section
	class="popular-animes grid-cols-[repeat(auto-fill,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]"
>
	{#await popular}
		Loading ...
	{:then value}
		{#each value as anime}
			<DefaultCard {anime} />
		{/each}
	{:catch error}
		{error}
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
