<script lang="ts">
	import Navbar from '$lib/components/Main/Navbar.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { navigating, page } from '$app/stores';
	import { loading } from '$lib/loading';

	// Loading
	// $: loading.setNavigate(!!$navigating);
	$: $loading = !!$navigating;
</script>

<AppShell>
	<svelte:fragment slot="header"><Navbar pathname={$page.data.pathname} /></svelte:fragment>
	<!-- <svelte:fragment slot="header">{$loading.status}</svelte:fragment> -->
	<main>
		<slot />
	</main>
</AppShell>

<style>
	main {
		margin: 0 10%;
		position: relative;
		z-index: 1;
	}
</style>
