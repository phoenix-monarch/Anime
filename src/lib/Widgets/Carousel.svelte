<script lang="ts">
	import { register } from 'swiper/element/bundle';

	export let results: any;

	register();

	const spaceBetween = 10;
	const onProgress = (e) => {
		const [swiper, progress] = e.detail;
		console.log(progress);
	};
	const onSlideChange = (e) => {
		console.log('slide changed');
	};
</script>

<div class="my-10">
	<swiper-container
		loop={true}
		slide-perview={1}
		autoplay={true}
		space-between={spaceBetween}
		centered-slides={true}
		pagination={{
			hideOnClick: true
		}}
		on:progress={onProgress}
		on:slidechange={onSlideChange}
	>
		{#each results as anime, i}
			<swiper-slide>
				<div
					class="slide relative w-full rounded-3xl"
					style="background-image: url({anime.cover});"
				>
					<!-- svelte-ignore a11y-missing-attribute -->
					<header class="p-6"># {i + 1} Spotlight</header>
					<div class="mx-4 text-4xl font-medium">
						{anime.title.romaji.slice(0, 40)}
					</div>
					<div class="mx-4 mt-2 flex flex-row  items-center">
						<p>
							{#each anime.genres as genre}
								<a href="animes/category/{genre.toLowerCase()}">
									<span
										class="chip variant-soft-secondary mx-2 hover:variant-filled-primary text-xs"
									>
										<span>{genre}</span>
									</span>
								</a>
							{/each}
						</p>
						<p>
							<span class="chip variant-filled">{anime.type}</span>
						</p>
					</div>

					<div class="mx-4 mt-2 flex text-xm font-bold flex-row items-center">
						<i class="ti ti-device-tv text-2xl mx-2" />
						{anime.totalEpisodes} Episode
					</div>

					<div class="mx-4 mt-2 flex text-xm font-bold flex-row items-center">
						<!-- svelte-ignore a11y-missing-content -->
						<a
							href="/search?search={anime.title.romaji}"
							class="btn variant-filled-secondary rounded-md"
						>
							Dettails
						</a>

						<a
							href="/episodes/{anime.title.romaji.toLowerCase().replaceAll(' ', '-') +
								'-episode-1'}"
							class="btn variant-filled-primary mx-2 rounded-md"
						>
							<i class="ti ti-player-play-filled mr-1" />
							Watch Now
						</a>
					</div>
				</div>
			</swiper-slide>
		{/each}
	</swiper-container>
</div>

<style>
	.slide {
		height: 250px;
		box-shadow: inset 100px 100px 70px rgba(0, 0, 0, 0.7);
	}
	header {
		font-size: 18px;
		font-weight: 600;
		color: rgb(209, 51, 51);
	}
</style>
