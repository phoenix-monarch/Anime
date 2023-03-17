<script lang="ts">
	import Paginator from '$lib/Widgets/Paginator.svelte';
	import { page } from '$app/stores';

	import Animes from '$lib/components/Anime/Animes.svelte';
</script>

<svelte:head>
	<title>Animes UI | Skeleton</title>
</svelte:head>

{#await $page.data.recent_episodes}
	Loading Now ...
{:then value}
	<Animes animes={value.results} />
	<Paginator result={value} />
{:catch error}
	{error}
{/await}
