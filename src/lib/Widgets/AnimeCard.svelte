<script lang="ts">
	import { fly } from 'svelte/transition';

	export let anime: any;
	export let is_popular = false;
	export let i = -1;
</script>

{#if is_popular}
	<article class="card card-hover">
		<a href="/animes/{anime.animeId}">
			<header class="card-header">
				<div class="img rounded" style="background-image: url({anime.animeImg});" />
			</header>
		</a>

		<section class="title text-center p-4 justify-center">
			{anime.animeTitle.slice(0, 30)}
		</section>
	</article>
{:else if i >= 0}
	<article in:fly={{ delay: i * 100, y: 50 }} class="card card-hover">
		<a href="/animes/{anime.id}">
			<header class="card-header">
				<div class="img rounded" style="background-image: url({anime.image});" />
			</header>
		</a>

		<section class="title text-center p-4 justify-center">
			{anime.title.slice(0, 40)}
		</section>
	</article>
{:else}
	<article class="card card-hover">
		<a href="/animes/{anime.id}">
			<header class="card-header">
				<div class="img rounded" style="background-image: url({anime.image});" />
			</header>
		</a>

		<section class="title text-center p-4 justify-center">
			{anime.title.slice(0, 40)}
		</section>
	</article>
{/if}

<style>
	.card {
		max-height: 400px;
		height: 100%;
	}
	.img {
		height: 270px;
		background-size: cover;
	}
</style>
