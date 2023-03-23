<script lang="ts">
	import RecentAddedCard from '../../Widgets/RecentAddedCard.svelte';
	export let animes: any = [];
</script>

<div class="slug" id="top">Pinned Episodes :</div>
<section
	class="animes grid-cols-[repeat(auto-fill,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]"
>
	{#each animes as anime}
		<RecentAddedCard {anime} />
	{/each}
</section>

<style>
	.slug {
		font-size: 25px;
		font-weight: 700;
		margin-top: 10px;
		margin-left: 20px;
	}
	.animes {
		padding: 20px;
		display: grid;
		grid-row-gap: 2rem;
		grid-column-gap: 1rem;
	}
</style>
