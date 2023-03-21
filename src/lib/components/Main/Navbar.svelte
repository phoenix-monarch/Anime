<script lang="ts">
	import { enhance } from '$app/forms';
	import { loading } from '$lib/loading';
	import { AppBar, ProgressBar, Drawer, drawerStore } from '@skeletonlabs/skeleton';
	let links = [
		{ name: 'Animes', link: '/animes' },
		{ name: 'Popular', link: '/animes/popular' },
		{ name: 'Movies', link: '/animes/movies' },
		{ name: 'Categories', link: '/animes/category' },
		{ name: 'Recently Added Episodes', link: '/' }
	];
	export let pathname: any;

	$: classesActive = (href: string) => (href === pathname ? '!bg-secondary-500' : '');
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<div class="logo flex px-4">
			<a href="/">
				<img src="/logo.png" class="h-12" alt="" srcset="" />
			</a>
			<!-- <a href="/">Anime UI</a> -->
		</div>
		<div class="burger-menu hidden">
			<button
				on:click={() => {
					drawerStore.open();
				}}
			>
				<i class="ti ti-menu-2 text-3xl" />
			</button>
		</div>

		<nav class="list-nav">
			<ul class="links">
				{#each links as link}
					<li>
						<a class="link mx-2 {classesActive(link.link)}" href={link.link}> {link.name} </a>
					</li>
				{/each}
			</ul>
		</nav>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<form action="/search" class="flex" method="post" use:enhance>
			<input class="input" placeholder="Search ..." type="text" name="q" id="" />
			<button type="submit" class="btn variant-glass-surface rounded mx-4">Search</button>
		</form>
	</svelte:fragment>
</AppBar>

{#if $loading}
	<ProgressBar meter={'bg-primary-900-50-token'} height={'h-1'} />
{:else}
	<div class="h-1" />
{/if}

<style>
	@media (max-width: 900px) {
		nav {
			display: none;
		}
		.logo {
			display: none;
		}
		.burger-menu {
			display: flex;
		}
	}
	.input {
		border-radius: 0.4rem;
	}
	.link:hover {
		background-color: rgb(99, 126, 177);
		transition: 0.5s ease;
	}
	.link {
		font-size: 15px;
		font-weight: 500;
		border-radius: 0.3rem;
	}
	.links {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.logo {
		font-size: 25px;
		font-weight: 800;
	}
</style>
