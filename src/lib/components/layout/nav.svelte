<script lang="ts">
	import { afterNavigate, goto } from '$app/navigation';
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
		const baseClass = 'block relative border-none';
		return baseClass + ' ' + (path === route ? 'page' : 'selected');
	}

	let homeClass: string, contentClass: string, codeOfConductClass: string, adminClass: string;

	afterNavigate(() => {
		homeClass = anchorClass('/');
		contentClass = anchorClass('/content');
		codeOfConductClass = anchorClass('/code-of-conduct');
		adminClass = anchorClass('/admin');
	});
</script>

<nav>
	<ul class="flex gap-8 my-8 text-white font-heading text-2xl leading-10">
		<li>
			<a class={homeClass} data-sveltekit-preload-data href="/">Home</a>
		</li>
		<li>
			<a class={contentClass} data-sveltekit-preload-data href="/content">Content</a>
		</li>
		<!-- <li>
			<a class={path === '/talks' ? 'page' : 'selected'} data-sveltekit-preload-data href="/talks">
				Talks
			</a>
		</li> -->
		<li>
			<a class={codeOfConductClass} data-sveltekit-preload-data href="/code-of-conduct">
				Code of Conduct
			</a>
		</li>
		{#if $loggedIn}
			<li>
				<a class={adminClass} data-sveltekit-preload-data href="/admin">Admin</a>
			</li>
			<li>
				<button on:click={logout}> Logout </button>
			</li>
		{/if}
	</ul>
</nav>

<style lang="postcss">
    a {
        @apply hover:text-secondary hover:border-none;
    }

	a:hover::before,
	.page::before {
		transform: scaleX(1);
	}

	.page::before {
		@apply bg-secondary;
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
			background: white;
			transform: scaleX(0);
		}
	}
</style>
