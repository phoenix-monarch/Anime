<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	export let anime_id: any;
	export let episodes: any;
	export let is_episode: any = false;
	export let current_episode_id: any;
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
							{#each episodes.reverse() as episode, i}
								<li>
									{#if is_episode}
										<a
											href="/episodes/{episode.id}?anime-id={anime_id}"
											class="hover:bg-surface-hover-token {current_episode_id == episode.id
												? '!bg-primary-500'
												: ''}"
										>
											<span class="flex-auto"
												>{episode.title.slice(0, 15)} ... : Episode {episode.number}</span
											>
										</a>
									{:else}
										<a href="/episodes/{episode.id}" class="hover:bg-surface-hover-token">
											<span class="flex-auto">{episode.title}: Episode {episode.number}</span>
										</a>
									{/if}
								</li>
							{/each}
						</ul>
					</nav>
				{:else}
					<nav class="list-nav">
						<ul>
							{#each episodes.reverse() as episode, i}
								<li>
									{#if is_episode}
										<a href="/episodes/enime/{episode.id}" class="hover:bg-surface-hover-token ">
											<span class="flex-auto"
												>{episodes.title.slice(0, 15)} ... : Episode {episode.number}</span
											>
										</a>
									{:else}
										<a
											href="/episodes/enime/{episode.id}?anime-id={anime_id}"
											class="hover:bg-surface-hover-token"
										>
											<span class="flex-auto">EP : {episode.number} {episode.title}</span>
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
