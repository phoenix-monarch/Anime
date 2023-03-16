<script lang="ts">
	export let result: any;
</script>

<div class="paginator pt-10">
	<nav aria-label="Page navigation example">
		<ul class="inline-flex -space-x-px">
			{#if Number(result.currentPage) !== 1}
				<li class="px-4">
					<form action="" method="get">
						<input type="text" name="page" hidden value={Number(result.currentPage) - 1} />
						<a class="btn" href="#top">
							<button class="btn variant-glass-surface">
								<i class="ti ti-player-track-prev" />
							</button>
						</a>
					</form>
				</li>
			{:else}
				<li class="px-4">
					<form action="" method="get">
						<input type="text" name="page" hidden />
						<button disabled class="btn variant-glass-surface">
							<i class="ti ti-player-track-prev" />
						</button>
					</form>
				</li>
			{/if}

			<div class="direct flex -4">
				<li class="px-4">
					<!-- svelte-ignore a11y-missing-attribute -->
					<a aria-current="page" class="btn variant-filled-surface">{Number(result.currentPage)}</a>
				</li>
			</div>

			{#if result.hasNextPage}
				<li class="px-4">
					<form action="" method="get">
						<input type="text" name="page" hidden value={Number(result.currentPage) + 1} />
						<a class="btn" href="#top">
							<button class="btn variant-glass-surface">
								<i class="ti ti-player-track-next" />
							</button>
						</a>
					</form>
				</li>
			{:else}
				<li class="px-4">
					<form action="" method="get">
						<input type="text" name="page" hidden />
						<button disabled class="btn variant-glass-surface">
							<i class="ti ti-player-track-next" />
						</button>
					</form>
				</li>
			{/if}
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
