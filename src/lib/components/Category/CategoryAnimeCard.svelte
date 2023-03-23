<script lang="ts">
	export let anime: any;
</script>

<article class="card card-hover">
	<a href="/enime/{anime.title.romaji.toLowerCase()}">
		<header class="card-header">
			<div class="img rounded" style="background-image: url({anime.image});" />
		</header>
	</a>

	<section class="title text-center p-4 justify-center">
		{anime.title.romaji.slice(0, 40)}
	</section>
</article>

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
