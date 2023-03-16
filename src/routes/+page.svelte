<script lang="ts">
	import Paginator from '$lib/Widgets/Paginator.svelte';
  	import { page } from '$app/stores';
	
	import Animes from '$lib/components/Anime/Animes.svelte';

</script>


<svelte:head>
	<title>
		Animes UI | Skeleton
	</title>
</svelte:head>

<Animes animes={$page.data.recent_episodes.results}/>

<Paginator result={$page.data.recent_episodes}/>




