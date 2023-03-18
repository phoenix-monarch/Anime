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

<section class="flex flex-row justify-between  mr-10 mb-5">
	<!-- Next Episode -->
	<!-- <a href="/episodes/{$page.data.next_episode}" class="btn control-episodes variant-soft-secondary">
		<i class="ti ti-caret-left text-3xl" />
		Next Episode
	</a> -->
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
	<!-- Previous Episode -->
	<!-- <a href="/episodes/{$page.data.prev_episode}" class="btn control-episodes variant-soft-secondary">
		Previous Episode
		<i class="ti ti-caret-right text-3xl " />
	</a> -->
</section>

<section class="episode-container">
	{#await $page.data.episode}
		<center> Loading... </center>
	{:then value}
		<Episode {serverURL} episode={value} />
		<!-- Next Previous Episode Start -->
		<!-- <div class="responsive-control-episode hidden mx-5 my-5">
			<a href="/episodes/{$page.data.next_episode}" class="btn  variant-soft-secondary">
				<i class="ti ti-caret-left text-3xl" />
				Next Episode
			</a>
			<a href="/episodes/{$page.data.prev_episode}" class="btn variant-soft-secondary">
				Previous Episode
				<i class="ti ti-caret-right text-3xl " />
			</a>
		</div> -->
		<!-- Next Previous Episode Ended -->
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

<!-- {#await $page.data.servers then value}
	<pre>
		{JSON.stringify(value, null, 2)}
	</pre>
{/await} -->
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
		/* .control-episodes {
			display: none;
		} */
		.servers {
			flex-wrap: wrap;
		}
		/* .responsive-control-episode {
			display: flex;
			justify-content: space-between;
			align-items: center;
		} */
	}
	.episode-container {
		display: flex;
	}
</style>
