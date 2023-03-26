<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	export let episodes: any;
</script>

<Accordion>
	<AccordionItem open>
		<svelte:fragment slot="lead"
			><i class="ti ti-device-tv text-2xl mx-8 font-bold" /></svelte:fragment
		>
		<svelte:fragment slot="summary">
			<h4 class="font-bold">Episodes</h4>
		</svelte:fragment>
		<svelte:fragment slot="content">
			<article class="grid grid-cols-5 md:grid-cols-12 gap-2 m-5">
				{#each episodes as episode}
					<span class="chip variant-filled-primary">{episode.number}</span>
				{/each}
			</article>
		</svelte:fragment>
	</AccordionItem>
</Accordion>

<style>
</style>
