<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let is_loading: any;

	function Click() {
		dispatch('click');
	}
</script>

<div class="my-5 flex justify-center items-center">
	<button class="btn variant-filled-primary" on:click={Click}>
		<i class="ti ti-dots-circle-horizontal mr-3" />
		{#if is_loading}
			<div class="h-5">
				<ProgressRadial width={'w-6'} />
			</div>
		{:else}
			Still Need More ...
		{/if}
	</button>
</div>
