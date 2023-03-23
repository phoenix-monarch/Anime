<script>
	// @ts-nocheck
	import EnimeEpisodeAcc from '$lib/components/Enime/EnimeEpisodeAcc.svelte';
	import Cover from '$lib/components/Enime/Cover.svelte';
	import EnimeDettails from '$lib/components/Enime/EnimeDettails.svelte';
	import { page } from '$app/stores';

	// @ts-nocheck

	// import Trailer from '$lib/components/trailer.svelte';
	$: anime = $page.data.anime;
</script>

<!-- <pre>
    {JSON.stringify($page.data.anime, null, 2)}
</pre> -->

<svelte:head>
	<title>
		{anime.title}
	</title>
</svelte:head>

<section class="detail">
	<Cover {anime} />
	<div class="items">
		<div class="poster_container">
			<img src={anime.image} class="shadow-2xl" alt="anime poster" />
		</div>
		<div class="data_container">
			<EnimeDettails {anime} />
		</div>
	</div>

	<hr />

	<!-- <EpisodesAccordin {anime} /> -->
	{#await $page.data.anime}
		waiting ...
	{:then value}
		<EnimeEpisodeAcc anime_id={value.id} episodes={value.episodes} />
	{:catch error}
		<!-- error -->
	{/await}
</section>

<style>
	section {
		margin: 0 10%;
	}
	@media (max-width: 800px) {
		.items {
			flex-direction: column;
		}
		.data_container {
			margin-top: 50px;
		}
	}

	.data_container {
		margin-left: 50px;
	}
	.poster_container img {
		border-radius: 2rem;
		max-width: 300px;
		min-width: 150px;
	}
	.items {
		margin: 30px 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	/* .trailer {
		margin: 20px;
		position: relative;
		overflow: hidden;
		width: 100%;
		padding-top: 56.25%;
	}
	h2 {
		margin: 20px;
		font-weight: 900;
		font-size: 2rem;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	} */
</style>
