<script lang="ts">
	export let anime: any;
</script>

<div
	class="my-10 slide relative w-full rounded-3xl"
	style="background-image: url({anime.cover});"
/>

<style>
	.slide {
		height: 250px;
		box-shadow: inset 100px 100px 70px rgba(0, 0, 0, 0.7);
	}
</style>
