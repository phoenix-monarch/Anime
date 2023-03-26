<script lang="ts">
	import Servers from '$lib/components/Anilist/Servers.svelte';
	import EpisodesAcc from '$lib/components/Anilist/EpisodesAcc.svelte';
	import Watch from '$lib/components/Anilist/Watch.svelte';
	import { page } from '$app/stores';
	$: anime = $page.data.anime;
	$: episode = $page.data.episode;
	$: servers = $page.data.servers;
	$: episodeData = $page.data.episodeData;
	let serverUrl: any;
</script>

<svelte:head>
	<title>{episodeData.title}</title>
</svelte:head>

<!-- <pre>
	{JSON.stringify($page.data.episodeData, null, 2)}
</pre> -->

<a href="/animes/{anime.id}">
	<header class=" text-white p-3 mt-1 w-fit rounded-xl font-bold bg-primary-800 mx-auto">
		{anime.title.romaji}
	</header>
</a>

<section>
	<Servers
		{servers}
		on:click={(e) => {
			serverUrl = e.detail.serverUrl;
		}}
	/>
</section>

<section class="flex flex-col md:flex-row">
	<div class="w-full md:w-4/5 ">
		<Watch {episode} {serverUrl} {episodeData} />
	</div>
	<div class="md:hidden">
		<header class="m-2 text-lg font-bold">Description :</header>
		<p class="text-justify m-2">
			{episodeData.description}
		</p>
	</div>
	<div class="w-full md:w-72">
		<EpisodesAcc current_id={$page.data.current_id} {anime} anime_id={$page.data.anime_id} />
	</div>
</section>
<div class="hidden mt-5 w-full justify-center  md:flex">
	<header class="m-2 text-lg font-bold">Description :</header>
	<p class="text-justify w-1/2 m-2">
		{episodeData.description}
	</p>
</div>

<style>
</style>
