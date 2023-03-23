<script lang="ts">
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	export let variables: any[];
	export let name: any;
	export let SelectedVar: any;
	export let is_multipe = false;
	export let height = 'h-44';
</script>

<div class="{height} overflow-scroll">
	<ListBox multiple={is_multipe}>
		{#each variables as variable}
			<ListBoxItem bind:group={SelectedVar} {name} value={variable}>{variable}</ListBoxItem>
		{/each}
	</ListBox>
</div>
