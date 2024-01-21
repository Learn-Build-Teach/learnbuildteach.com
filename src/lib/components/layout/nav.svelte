<script lang="ts">
	import { afterNavigate, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { supabase } from '$src/lib/helpers/supabase';
	import { loggedIn } from '$stores/authStore';

	let isOpen = false;

	const handleIsOpen = () => (isOpen = !isOpen);

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
	<ul class="md:flex relative gap-8 my-8 text-white font-heading text-2xl leading-10 hidden">
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
	<div class="md:hidden">
		<button on:click={handleIsOpen}>
			<a href="/">
				<img src="/images/burger-icon.svg" alt="burger menu" />
			</a>
		</button>
	</div>

	<div
		class="{isOpen
			? 'absolute'
			: 'hidden'} flex flex-col top-5 left-1/2 transform -translate-x-1/2 w-[85%] h-[335px] bg-primary rounded-[17px] shadow"
	>
		<div class="flex p-4 justify-between items-center">
			<img
				class="w-[52px] h-[52px] shadow-lg rounded-full"
				src="/images/logo-dark-pencil.png"
				alt="logo"
			/>
			<button on:click={handleIsOpen}>
				<img class="w-6 h-6 relative" src="/images/x-close.svg" alt="close button" />
			</button>
		</div>
		<div class="flex flex-col p-4 gap-6">
			<ul class="p-0 m-0 list-none">
				<li class="mb-6">
					<a href="/content" class="text-slate-400 text-lg font-normal font-body hover:text-white"
						>Content</a
					>
				</li>
				<li class="mb-6">
					<a
						href="/code-of-conduct"
						class="text-slate-400 text-lg font-normal font-body hover:text-white">Code of Conduct</a
					>
				</li>
				<li class="mb-6">
					<a
						href="https://github.com/Learn-Build-Teach"
						class="text-slate-400 text-lg font-normal font-body hover:text-white">Github Repo</a
					>
				</li>
				<li class="mb-6">
					<a
						href="https://discord.gg/vM2bagU"
						class="text-slate-400 text-lg font-normal font-body hover:text-white underline"
						>Join on Discord</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
