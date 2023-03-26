<script lang="ts">
	export let anime: any;
</script>

<div class="flex h-full w-full my-2">
	<div class="container">
		<iframe
			allowfullscreen="true"
			class="responsive-iframe"
			src="https://www.youtube.com/embed/{anime.trailer.id}"
			title="Something"
			frameborder="0"
		/>
	</div>
</div>

<style>
	.container {
		position: relative;
		overflow: hidden;
		width: 100%;
		padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
	}
	.responsive-iframe {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}
</style>
