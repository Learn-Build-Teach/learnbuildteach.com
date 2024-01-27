<script lang="ts">
	import { afterNavigate, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { supabase } from '$src/lib/helpers/supabase';
	import { loggedIn } from '$stores/authStore';
	import { isOpen } from '$stores/mobileMenuStore';
	// let isOpen = false;

	const handleIsOpen = () => isOpen.set(!$isOpen);

	const logout = async () => {
		await supabase.auth.signOut();
		goto('/');
	};

	const publicRoutes = [
		{
			path: '/content',
			name: 'Content'
		},
		{
			path: '/code-of-conduct',
			name: 'Code of Conduct'
		},
		{
			path: 'https://github.com/Learn-Build-Teach',
			name: 'Join on Discord',
			underlined: true
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
	<ul
		class="md:flex md:text-[18px] relative gap-8 my-8 text-slate-400 font-normal text-lg leading-10 hidden"
	>
		{#each publicRoutes as route}
			<li class="relative group">
				<a
					class={`block relative border-none hover:text-white hover:underline`}
					data-sveltekit-preload-data
					href={route.path}>{route.name}</a
				>
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

	<!-- ------------------ MOBILE NAV -------------------- -->
	<div class="md:hidden px-2">
		<button on:click={handleIsOpen}>
			<img src="/images/burger-icon.svg" alt="burger menu" />
		</button>
	</div>

	<div
		class="{$isOpen
			? 'absolute z-10'
			: 'hidden'} flex flex-col top-5 left-1/2 transform -translate-x-1/2 w-[95%] h-[335px] bg-primary rounded-[17px] shadow"
	>
		<div class="flex p-4 justify-between items-center">
			<a href="/">
				<img
					class="w-12 h-12 shadow-lg rounded-full"
					src="/images/logo-dark-pencil.png"
					alt="logo"
				/>
			</a>
			<button on:click={handleIsOpen}>
				<img class="w-6 h-6 relative" src="/images/x-close.svg" alt="close button" />
			</button>
		</div>
		<div class="flex flex-col p-4 gap-6">
			<ul class="p-0 m-0 list-none">
				<li class="mb-6">
					<a
						href="/content"
						class="text-slate-400 text-lg font-normal font-body hover:text-white hover:underline"
						>Content</a
					>
				</li>
				<li class="mb-6">
					<a
						href="/code-of-conduct"
						class="text-slate-400 text-lg font-normal font-body hover:text-white hover:underline"
						>Code of Conduct</a
					>
				</li>
				<li class="mb-6">
					<a
						href="https://github.com/Learn-Build-Teach"
						class="text-slate-400 text-lg font-normal font-body hover:text-white hover:underline"
						>Github Repo</a
					>
				</li>
				<li class="mb-6">
					<a
						href="https://discord.gg/vM2bagU"
						class="text-slate-400 text-lg font-normal font-body hover:text-white hover:underline"
						>Join on Discord</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
