<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	export let anime: any;
</script>

<Accordion>
	<AccordionItem>
		<svelte:fragment slot="lead">
			<i class="ti ti-device-tv text-2xl mx-8 font-bold" />
		</svelte:fragment>
		<svelte:fragment slot="summary">
			<h4 class="font-bold">Episodes</h4>
		</svelte:fragment>
		<svelte:fragment slot="content">
			<article class="grid grid-cols-5 md:grid-cols-12 gap-2 m-5">
				{#each anime.episodes as episode}
					<span class="chip variant-filled-primary">
						<a class="w-full h-full" href="/episodes/{episode.id}?anime={anime.id}">
							<p class="text-white">
								{episode.number}
							</p>
						</a>
					</span>
				{/each}
			</article>
		</svelte:fragment>
	</AccordionItem>
</Accordion>

<style>
</style>
