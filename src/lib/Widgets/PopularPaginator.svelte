<script lang="ts">
	export let page: any = undefined;
</script>

<div class="paginator pt-10">
	<nav aria-label="Page navigation example">
		<ul class="inline-flex -space-x-px">
			<li class="px-4">
				<form action="" method="get">
					<input type="text" name="page" hidden value={page ? page - 1 : 1} />

					<button class="btn variant-glass-surface">
						<i class="ti ti-player-track-prev" />
					</button>
				</form>
			</li>

			<div class="direct flex -4">
				<li class="px-4">
					<!-- svelte-ignore a11y-missing-attribute -->
					<a aria-current="page" class="btn variant-filled-surface">{page ? page : 1}</a>
				</li>
			</div>

			<li class="px-4">
				<form action="" method="get">
					<input type="text" name="page" hidden value={page + 1} />

					<button class="btn variant-glass-surface">
						<i class="ti ti-player-track-next" />
					</button>
				</form>
			</li>
		</ul>
	</nav>
</div>

<style>
	.direct {
		margin-bottom: 20px;
	}
	.paginator {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 50px;
	}
</style>
