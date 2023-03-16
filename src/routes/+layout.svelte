<script lang="ts">
	import Navbar from '$lib/components/Main/Navbar.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { page } from '$app/stores';
</script>

<AppShell>
	<svelte:fragment slot="header"><Navbar pathname={$page.data.pathname} /></svelte:fragment>
	<main>
		<slot />
	</main>
</AppShell>

<style>
	main {
		margin: 0 10%;
	}
</style>
