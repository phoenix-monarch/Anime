<script lang="ts">
	export let anime: any;
	export let is_popular = false;
</script>

{#if is_popular}
	<article class="card card-hover">
		<a href="/animes/{anime.title.romaji.toLowerCase().replaceAll(' ', '-').replaceAll('.', '')}">
			<header class="card-header">
				<div class="img rounded" style="background-image: url({anime.image});" />
			</header>
		</a>

		<section class="title text-center p-4 justify-center">
			{anime.title.english.slice(0, 30)}
		</section>
	</article>
{:else}
	<article class="card card-hover">
		<a href="/animes/{anime.id}">
			<header class="card-header">
				<div class="img rounded" style="background-image: url({anime.image});" />
			</header>
		</a>

		<section class="title text-center p-4 justify-center">
			{anime.title.slice(0, 30)}
		</section>
	</article>
{/if}

<style>
	.card {
		max-height: 400px;
		height: 100%;
	}
	.img {
		height: 270px;
		background-size: cover;
	}
</style>
