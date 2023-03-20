<script lang="ts">
	export let anime: any;
	let collapse = false;
</script>

<div class="data">
	<h1>{anime.title}</h1>
	Start Date :<span>{anime.releaseDate}</span> <br />
	Type :<span>{anime.type}</span> <br />
	Other Names : <span>{anime.otherName}</span> <br />
	Status : <span>{anime.status}</span> <br />
	Total Episodes : <span>{anime.totalEpisodes}</span> <br />
	Sub or Dub : <span>{anime.subOrDub}</span> <br />
	<div class="flex">
		{#each anime.genres as genre}
			<a href="/animes/category/{genre.toLowerCase()}">
				<span class="chip font-extralight m-2 variant-ghost hover:variant-filled">
					<span>{genre}</span>
				</span>
			</a>
		{/each}
	</div>
</div>
<div class="description">
	<span> Description : </span>
	<p class="desc">
		{#if collapse}
			{@html anime.description}
		{:else}
			{@html anime.description.slice(0, 1000)} ...
		{/if}
	</p>
	<button
		class="btn rounded variant-glass-primary"
		on:click={() => {
			collapse = !collapse;
		}}
	>
		{#if collapse}
			Collapse
		{:else}
			Uncollapse
		{/if}
	</button>
</div>

<style>
	.data {
		font-size: 1.1rem;
	}
	.data span {
		font-weight: bold;
	}
	.data h1 {
		margin-bottom: 10px;
		font-weight: 900;
		font-size: 2rem;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
	.description {
		margin: 10px 0;
	}
	.description span {
		font-size: 1.2rem;
		font-weight: bold;
	}
	.desc {
		margin-top: 10px;
	}
</style>
