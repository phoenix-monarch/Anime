<script lang="ts">
	export let anime: any;
</script>

<div
	class="mt-5	10 h-20 blur-2xl  lg:h-32 slide  w-full rounded-3xl"
	style="background-image: url({anime.cover ? anime.cover : anime.image});"
/>

<style>
	.slide {
		z-index: 1;
		box-shadow: inset 100px 100px 70px rgba(0, 0, 0, 0.7);
	}
</style>
