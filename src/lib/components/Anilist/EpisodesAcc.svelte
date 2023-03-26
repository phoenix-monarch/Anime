<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	export let anime: any;
	export let current_id: any;
	export let anime_id: any;
</script>

<div class="episodes w-full md:m-8">
	<Accordion hover="hover:bg-secondary-hover-token">
		<AccordionItem open>
			<svelte:fragment slot="lead">
				<i class="ti ti-device-tv font-bold" />
			</svelte:fragment>
			<svelte:fragment slot="summary">
				<span class="font-bold header"> Episodes </span>
			</svelte:fragment>
			<svelte:fragment slot="content">
				<nav
					class="list-nav episode-acc max-h-60  lg:max-h-[28rem] xl:max-h-[30rem] 2xl:max-h-[35rem]"
				>
					<ul>
						{#each anime.episodes as episode, i}
							<li>
								<a
									href="/episodes/{episode.id}?anime={anime_id}"
									class="hover:bg-surface-hover-token {current_id == episode.id
										? '!bg-primary-500'
										: ''}"
								>
									<span class="flex-auto"
										>{anime.title.romaji.slice(0, 15)} ... : Episode {episode.number}</span
									>
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			</svelte:fragment>
		</AccordionItem>
	</Accordion>
</div>

<style>
	.episode-acc {
		/* max-height: 35rem; */
		height: 100%;
		overflow: scroll;
	}
</style>
