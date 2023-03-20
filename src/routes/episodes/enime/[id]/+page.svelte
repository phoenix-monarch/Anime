<script lang="ts">
	import EnimeEpisodeAcc from '$lib/components/Enime/EnimeEpisodeAcc.svelte';
	import { page } from '$app/stores';
	import Episode from '$lib/components/Anime/Episode.svelte';
	let serverURL: any;
</script>

<svelte:head>
	<title>Watch {$page.data.anime.title.toLowerCase()}</title>
</svelte:head>

<header class="my-4">
	{#await $page.data.anime then value}
		<a class="btn variant-filled-secondary" href="/enime/{value.title.toLowerCase()}">
			{value.title}
		</a>
	{:catch error}
		{error}
	{/await}
</header>

<section class="episode-container">
	{#await $page.data.episode}
		<center> Loading... </center>
	{:then value}
		<Episode {serverURL} episode={value} />
	{:catch error}
		{error}
	{/await}
	<div class="episode-acc w-96">
		{#await $page.data.anime}
			Waiting
		{:then value}
			<EnimeEpisodeAcc
				current_episode_id={$page.data.current_episode_id}
				is_episode={true}
				episodes={value.episodes}
				anime_id={value.id}
			/>
		{:catch error}
			{error}
		{/await}
	</div>
</section>

<style>
	header {
		text-overflow: clip;
		text-align: center;
		font-weight: 700;
		font-size: 25px;
	}
	@media screen and (max-width: 1280px) {
		header {
			text-overflow: clip;
			text-align: center;
			font-weight: 600;
			font-size: 15px;
		}
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
