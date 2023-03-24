<script lang="ts">
	import Carousel from '$lib/Widgets/Carousel.svelte';
	import Recent from '$lib/components/Anilist/Recent.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Animes</title>
</svelte:head>

<!-- <pre>
	{JSON.stringify($page.data.trendingAnimes, null, 2)}
</pre> -->

<Carousel results={$page.data.trendingAnimes.results} />

<header class="flex justify-between">
	<div class="mx-10 mt-4 text-xl font-bold">Recently Added :</div>
	<div class="mx-10 mt-4 text-lg font-bold">
		<a href="/">Explore more</a>
	</div>
</header>
<section
	class="recent-added grid p-5 gap-4 grid-cols-[repeat(auto-fill,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]"
>
	{#each $page.data.recentAnimes.results as anime}
		<Recent {anime} />
	{/each}
</section>

<style>
</style>
