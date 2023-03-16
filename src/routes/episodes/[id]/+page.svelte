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
	<a class="btn variant-filled-secondary" href="/animes/{$page.data.anime.id}">
		{$page.data.anime.title}
	</a>
</header>

<section class="episode-container">
	<Episode episode={$page.data.episode} />
	<div class="episode-acc">
		<EpisodesAccordin
			is_episode={{
				current_id: $page.data.episode_id
			}}
			anime={$page.data.anime}
		/>
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
