<script lang="ts">
	import Carousel from '$lib/Widgets/Carousel.svelte';
	import Paginator from '$lib/Widgets/Paginator.svelte';
	import { page } from '$app/stores';

	import Animes from '$lib/components/Anime/Animes.svelte';
</script>

<svelte:head>
	<title>Animes UI | Skeleton</title>
</svelte:head>

{#await $page.data.trending_animes}
	waiting ...
{:then value}
	<Carousel results={value.results} />
{:catch error}
	{error}
{/await}

{#await $page.data.recent_episodes}
	Loading Now ...
{:then value}
	<Animes animes={value.results} />
	<Paginator result={value} />
{:catch error}
	{error}
{/await}

<!-- {#await $page.data.trending_animes}
	waiting ...
{:then value}
	<pre>
		{JSON.stringify(value, null, 2)}
	</pre>
{:catch error}
	{error}
{/await} -->
