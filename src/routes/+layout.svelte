<script lang="ts">
	import Navbar from '$lib/components/Main/Navbar.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// import '@skeletonlabs/skeleton/themes/theme-modern.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { navigating, page } from '$app/stores';
	import { loading } from '$lib/loading';
	import Drawer from '$lib/components/Main/Drawer.svelte';

	// Loading
	// $: loading.setNavigate(!!$navigating);
	$: $loading = !!$navigating;
</script>

<Drawer pathname={$page.data.pathname} />
<AppShell>
	<svelte:fragment slot="header"><Navbar pathname={$page.data.pathname} /></svelte:fragment>
	<!-- <svelte:fragment slot="header">{$loading.status}</svelte:fragment> -->
	<main class="mx-[10%]">
		<slot />
	</main>
</AppShell>

<style>
	@media (max-width: 720px) {
		main {
			margin: 0;
		}
	}
	main {
		position: relative;
		z-index: 1;
	}
</style>
