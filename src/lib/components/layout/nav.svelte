<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { supabase } from '$src/lib/helpers/supabase';
	import { loggedIn } from '$stores/authStore';

	$: path = $page.url.pathname;

	const logout = async () => {
		await supabase.auth.signOut();
		goto('/');
	};

	type Route = '/' | '/content' | '/code-of-conduct' | '/admin';

	function anchorClass(route: Route) {
		const baseClass = 'block relative border-none hover:text-secondary hover:border-none';
		return baseClass + ' ' + (path === route ? 'page' : 'selected');
	}
</script>

<nav>
	<ul class="flex gap-8 my-8 text-white font-heading text-2xl leading-10">
		<li>
			<a class={anchorClass('/')} data-sveltekit-preload-data href="/">Home</a>
		</li>
		<li>
			<a class={anchorClass('/content')} data-sveltekit-preload-data href="/content">Content</a>
		</li>
		<!-- <li>
			<a class={path === '/talks' ? 'page' : 'selected'} data-sveltekit-preload-data href="/talks">
				Talks
			</a>
		</li> -->
		<li>
			<a
				class={anchorClass('/code-of-conduct')}
				data-sveltekit-preload-data
				href="/code-of-conduct"
			>
				Code of Conduct
			</a>
		</li>
		{#if $loggedIn}
			<li>
				<a class={anchorClass('/admin')} data-sveltekit-preload-data href="/admin">Admin</a>
			</li>
			<li>
				<button on:click={logout}> Logout </button>
			</li>
		{/if}
	</ul>
</nav>

<style>
	a:hover {
		color: var(--secondary);
		border: none;
	}

	.selected:hover {
		color: var(--secondary);
	}
	a:hover::before,
	.page::before {
		transform: scaleX(1);
	}
	.page::before {
		background: var(--secondary);
	}

	@media (min-width: 1024px) {
		a::before {
			content: '';
			position: absolute;
			transition: all 0.3s ease;
			left: 12%;
			top: 100%;
			/* top: 80%; */
			width: 75%;
			height: 4px;
			background: var(--white);
			transform: scaleX(0);
		}
	}
</style>
