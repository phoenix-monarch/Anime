<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	export let anime: any;
	export let is_episode: any;
</script>

<div class="episodes m-8">
	<Accordion hover="hover:bg-secondary-hover-token">
		<AccordionItem open={is_episode}>
			<svelte:fragment slot="lead">
				<i class="ti ti-device-tv font-bold" />
			</svelte:fragment>
			<svelte:fragment slot="summary">
				<span class="font-bold header"> Episodes </span>
			</svelte:fragment>
			<svelte:fragment slot="content">
				{#if is_episode}
					<nav class="list-nav episode-acc">
						<ul>
							{#each anime.episodes as episode, i}
								<li>
									{#if is_episode}
										<a
											href="/episodes/{episode.id}"
											class="hover:bg-surface-hover-token {is_episode.current_id == episode.id
												? '!bg-primary-500'
												: ''}"
										>
											<span class="flex-auto"
												>{anime.title.slice(0, 15)} ... : Episode {episode.number}</span
											>
										</a>
									{:else}
										<a href="/episodes/{episode.id}" class="hover:bg-surface-hover-token">
											<span class="flex-auto">{anime.title}: Episode {episode.number}</span>
										</a>
									{/if}
								</li>
							{/each}
						</ul>
					</nav>
				{:else}
					<nav class="list-nav">
						<ul>
							{#each anime.episodes as episode, i}
								<li>
									{#if is_episode}
										<a href="/episodes/{episode.id}" class="hover:bg-surface-hover-token ">
											<span class="flex-auto"
												>{anime.title.slice(0, 15)} ... : Episode {episode.number}</span
											>
										</a>
									{:else}
										<a href="/episodes/{episode.id}" class="hover:bg-surface-hover-token">
											<span class="flex-auto">{anime.title}: Episode {episode.number}</span>
										</a>
									{/if}
								</li>
							{/each}
						</ul>
					</nav>
				{/if}
			</svelte:fragment>
		</AccordionItem>
	</Accordion>
</div>

<style>
	.episode-acc {
		max-height: 500px;
		height: 100%;
		overflow: scroll;
	}
</style>
