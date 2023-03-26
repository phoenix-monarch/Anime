<script lang="ts">
	export let anime: any;
	let show_more = false;
</script>

<article>
	<div class="w-full h-72 blur-3xl absolute z-0" style="background-image: url({anime.cover});" />
	<section class="flex flex-col justify-center items-center md:flex-row relative z-10 mt-10">
		<h1 class="font-bold text-center md:hidden">
			{anime.title.romaji}
		</h1>
		<div class="poster m-4 shadow-2xl">
			<img class="rounded-2xl h-[25rem] md:h-[30rem] " src={anime.image} alt="" />
		</div>
		<div class="data w-full md:w-3/4">
			<div class="hidden md:flex gap-3 flex-row justify-between m-4">
				<h1 class="font-bold">
					{anime.title.romaji}
				</h1>
			</div>
			<div class="flex gap-3 flex-row justify-between mx-4">
				<p class="">
					Release Year : <span class="font-bold underline">{anime.releaseDate}</span>
				</p>
				<p class="">
					Status : <span class="font-bold underline">{anime.status}</span>
				</p>
			</div>
			<div class="flex gap-3 flex-row justify-between mx-4">
				<p class="">
					Rating : <span class="font-bold underline">{Number(anime.rating) / 10}</span>
				</p>
				<p class="">
					Total Episodes : <span class="font-bold underline">{anime.totalEpisodes}</span>
				</p>
			</div>
			<div class="mt-2 mx-4">
				<button class="btn rounded-lg bg-primary-900">Watch Trailer</button>
			</div>
			<div class="mx-4 mt-5 hidden md:block text-justify">
				{#if show_more}
					{@html anime.description}
					<br />
					<button
						class="text-primary-700"
						on:click={() => {
							show_more = !show_more;
						}}>show less</button
					>
				{:else}
					{@html anime.description.slice(0, 800)} ...
					<br />
					<button
						class="text-primary-700"
						on:click={() => {
							show_more = !show_more;
						}}>show more</button
					>
				{/if}
			</div>
			<div class="mx-4 mt-5  md:hidden text-justify">
				{#if show_more}
					{@html anime.description}
					<br />
					<button
						class="text-primary-700"
						on:click={() => {
							show_more = !show_more;
						}}>show less</button
					>
				{:else}
					{@html anime.description.slice(0, 400)} ...
					<br />
					<button
						class="text-primary-700"
						on:click={() => {
							show_more = !show_more;
						}}>show more</button
					>
				{/if}
			</div>
		</div>
	</section>
</article>

<style>
	@media (min-width: 768px) {
		article p {
			font-size: 18px;
		}
	}
</style>
