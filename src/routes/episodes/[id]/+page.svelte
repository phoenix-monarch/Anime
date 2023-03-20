<script lang="ts">
	import EpisodesAccordin from '$lib/Widgets/EpisodesAccordin.svelte';
	import Episode from './../../../lib/components/Anime/Episode.svelte';
	import { page } from '$app/stores';
	let SelectedServer: any = 'Gogo server';
	let serverURL: any;
</script>

<svelte:head>
	<title>
		{$page.data.title}
	</title>
</svelte:head>

<header class="my-4">
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

<section class="servers flex justify-center">
	{#await $page.data.servers then value}
		{#each value as server}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span
				class="chip  hover:variant-filled m-4 {server.name === SelectedServer
					? 'variant-filled-primary'
					: 'variant-soft-secondary'}"
				on:click={() => {
					SelectedServer = server.name;
					serverURL = server.url;
				}}
			>
				<span>{server.name}</span>
			</span>
		{/each}
	{:catch error}
		<!-- error -->
	{/await}
</section>

<section class="episode-container">
	{#await $page.data.episode}
		<center> Loading... </center>
	{:then value}
		<Episode {serverURL} episode={value} />
	{:catch error}
		{error}
	{/await}
	<div class="episode-acc w-96">
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
		.servers {
			flex-wrap: wrap;
		}
	}
	.episode-container {
		display: flex;
	}
</style>
