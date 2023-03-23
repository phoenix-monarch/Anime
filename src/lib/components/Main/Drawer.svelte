<script lang="ts">
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
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

<Drawer>
	<div class="logo flex m-5 px-4">
		<!-- <a class="btn text-3xl" href="/">Anime UI</a> -->
		<a href="/">
			<img src="/logo.png" class="h-12" alt="" srcset="" />
		</a>
	</div>
	<nav class="list-nav">
		<ul class="links">
			{#each links as link}
				<li>
					<a
						on:click={() => {
							drawerStore.close();
						}}
						class="link mx-2 {classesActive(link.link)}"
						href={link.link}
					>
						{link.name}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</Drawer>

<style>
	.logo {
		font-weight: 800;
	}
</style>
