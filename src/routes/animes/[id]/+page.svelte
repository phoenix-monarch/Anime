<script>
	import Trailer from '$lib/components/Anilist/Trailer.svelte';
	import Episodes from '$lib/components/Anilist/Episodes.svelte';
	import Dettails from '$lib/components/Anilist/Dettails.svelte';
	import { page } from '$app/stores';
	$: anime = $page.data.anime;
</script>

<svelte:head>
	<title>
		{anime.title.english}
	</title>
</svelte:head>
<!-- <pre>
	{JSON.stringify(anime.episodes, null, 2)}
</pre> -->

<section class="detail">
	<Dettails {anime} />
</section>
<section class="episodes">
	<Episodes {anime} />
</section>

<!-- <section class="trailer">
	<Trailer {anime} />
</section> -->
<style>
</style>
