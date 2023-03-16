<script lang="ts">
	import EpisodesAccordin from '$lib/Widgets/EpisodesAccordin.svelte';
	import Episode from './../../../lib/components/Anime/Episode.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>
		{$page.data.title}
	</title>
</svelte:head>

<header>
	{#await $page.data.anime then value}
		<a class="btn variant-filled-secondary" href="/animes/{value.id}">
			{value.title}
		</a>
	{:catch error}
		<a class="btn variant-filled-secondary" href="/animes/{$page.data.anime.id}">
			{error}
		</a>
	{/await}
</header>

<section class="episode-container">
	{#await $page.data.episode then value}
		<!-- value -->
		<Episode episode={value} />
	{:catch error}
		{error}
	{/await}
	<div class="episode-acc">
		{#await $page.data.anime then value}
			<EpisodesAccordin
				is_episode={{
					current_id: $page.data.episode_id
				}}
				anime={value}
			/>
		{:catch error}
			{error}
		{/await}
	</div>
</section>

<style>
	header {
		text-align: center;
		font-size: 700;
		font-size: 25px;
		margin: 20px;
	}
	@media screen and (max-width: 1280px) {
		.episode-container {
			flex-direction: column;
		}
		.episode-acc {
			max-width: 1024px;
			width: 100%;
		}
	}
	.episode-container {
		display: flex;
	}
</style>
