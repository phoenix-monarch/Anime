<script lang="ts">
	import GenreAnime from './../../../../lib/components/Anime/GenreAnime.svelte';
	import AnimeCard from '$lib/Widgets/AnimeCard.svelte';
	import { page } from '$app/stores';
	import { inview } from 'svelte-inview';

	import { GogoAnime } from '$lib/providers';
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	$: genre_animes = $page.data.genre_animes;
	$: is_loading = false;
	let anime_page = 2;

	async function load_more() {
		is_loading = true;
		const gogo = new GogoAnime();
		const data = await gogo.by_genre($page.data.genre, anime_page);
		anime_page++;
		genre_animes = [...genre_animes, ...data];
		is_loading = false;
	}
</script>

<svelte:head>
	<title>Category Animes</title>
</svelte:head>

<div id="top" />

<GenreAnime {genre_animes} />
<div use:inview on:change={load_more} />

<div class="my-5 flex justify-center items-center">
	<button class="btn variant-filled-primary" on:click={load_more}>
		<i class="ti ti-dots-circle-horizontal mr-3" />
		{#if is_loading}
			<div class="h-5">
				<ProgressRadial width={'w-6'} />
			</div>
		{:else}
			Still Need More ...
		{/if}
	</button>
</div>

<style>
</style>
