<script lang="ts">
	import { enhance } from '$app/forms';
	import { AppBar } from '@skeletonlabs/skeleton';
	let links = [
		{ name: 'Animes', link: '/animes' },
		{ name: 'Popular', link: '/animes/popular' },
		{ name: 'Top Airing', link: '/animes/top-airing' },
		{ name: 'Recently Added Episodes', link: '/' }
	];
	export let pathname: any;

	$: classesActive = (href: string) => (href === pathname ? '!bg-secondary-500' : '');
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<div class="logo px-4">
			<a href="/">Anime UI</a>
		</div>

		<nav class="list-nav">
			<ul class="links">
				{#each links as link}
					<li>
						<a class="link mx-2 {classesActive(link.link)}" href={link.link}> {link.name} </a>
					</li>
				{/each}
				<!-- <li>
					<a class="link" href="/"> Popular </a>
				</li>
				<li>
					<a class="link" href="/trending"> Trending </a>
				</li> -->
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

<style>
	@media (max-width: 700px) {
		nav {
			display: none;
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
