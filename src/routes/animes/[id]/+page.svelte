<script>
	import Dettails from '$lib/components/Anilist/Dettails.svelte';
	import { page } from '$app/stores';
	$: anime = $page.data.anime;
</script>

<svelte:head>
	<title>
		{anime.title.english}
	</title>
</svelte:head>

<section class="detail">
	<!-- <pre>
		{JSON.stringify(anime, null, 2)}
	</pre> -->
	<Dettails {anime} />
</section>

<style>
</style>
