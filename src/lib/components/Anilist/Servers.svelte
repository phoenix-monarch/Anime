<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let servers: any;
	let SelectedServer: any;
	let serverUrl: any;

	const dispatch = createEventDispatcher();
</script>

<section class="flex justify-center flex-wrap">
	{#await servers then value}
		{#each value as server}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span
				class="chip  hover:variant-filled m-4 {server.name === SelectedServer
					? 'variant-filled-primary'
					: 'variant-soft-secondary'}"
				on:click={() => {
					SelectedServer = server.name;
					serverUrl = server.url;
					dispatch('click', {
						SelectedServer,
						serverUrl
					});
				}}
			>
				<span>{server.name}</span>
			</span>
		{/each}
	{:catch error}
		{error}
	{/await}
</section>
