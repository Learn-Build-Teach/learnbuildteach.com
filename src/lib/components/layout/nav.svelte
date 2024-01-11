<script lang="ts">
	import { afterNavigate, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { supabase } from '$src/lib/helpers/supabase';
	import { loggedIn } from '$stores/authStore';

	const logout = async () => {
		await supabase.auth.signOut();
		goto('/');
	};

	const publicRoutes = [
		{
			path: '/',
			name: 'Home'
		},
		{
			path: '/content',
			name: 'Content'
		},
		{
			path: '/code-of-conduct',
			name: 'Code of Conduct'
		}
	];

	const adminRoutes = [
		{
			path: '/admin',
			name: 'Admin'
		}
	];
</script>

<nav>
	<ul class="flex gap-8 my-8 text-white font-heading text-2xl leading-10">
		{#each publicRoutes as route}
			<li class="relative group">
				<a class={`block relative border-none `} data-sveltekit-preload-data href={route.path}
					>{route.name}</a
				>{#if $page.url.pathname === route.path}
					<span class="absolute left-1 right-1 h-1 rounded-sm bg-secondary block scale-x-100" />
				{:else}
					<span
						class="absolute left-1 right-1 h-1 rounded-sm bg-white block transition-transform scale-x-0 group-hover:scale-x-100"
					/>
				{/if}
			</li>
		{/each}

		{#if $loggedIn}
			{#each adminRoutes as route}
				<li class="relative group">
					<a class={`block relative border-none `} data-sveltekit-preload-data href={route.path}
						>{route.name}</a
					>{#if $page.url.pathname === route.path}
						<span class="absolute left-1 right-1 h-1 rounded-sm bg-secondary block scale-x-100" />
					{:else}
						<span
							class="absolute left-1 right-1 h-1 rounded-sm bg-white block transition-transform scale-x-0 group-hover:scale-x-100"
						/>
					{/if}
				</li>
			{/each}
			<li>
				<button on:click={logout}> Logout </button>
			</li>
		{/if}
	</ul>
</nav>

<style lang="postcss">
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
