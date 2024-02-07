<script lang="ts">
	import JoinDiscordBtn from '$components/JoinDiscordBtn.svelte';
	import NavLink from '$components/NavLink.svelte';
	import { supabase } from '$src/lib/helpers/supabase';
	import { loggedIn } from '$stores/authStore';
	import { isOpen } from '$stores/mobileMenuStore';
	import { fly } from 'svelte/transition';

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
		class="lg:flex lg:text-[18px] relative gap-8 my-8 text-slate-300 font-normal text-lg leading-10 hidden items-center"
	>
		{#each publicRoutes as route}
			<NavLink path={route.path} name={route.name} />
		{/each}
		<img
			src="/images/discord-logo.svg"
			alt="discord-logo"
			class="bg-white p-2 cursor-pointer hover:scale-105 transition-transform rounded-xl w-[29.71px] h-[22.52px] lg:w-[55px] lg:h-[42px] md:w-[55px] md:h-[42px]"
		/>

		{#if $loggedIn}
			{#each adminRoutes as route}
				<NavLink path={route.path} name={route.name} />
			{/each}
			<li>
				<button on:click={logout}> Logout </button>
			</li>
		{/if}
	</ul>

	<!-- ------------------ MOBILE NAV -------------------- -->
	<div class="lg:hidden px-2">
		<button on:click={handleIsOpen}>
			<img class="md:w-10 md:h-10" src="/images/burger-icon.svg" alt="burger menu" />
		</button>
	</div>

	{#if $isOpen}
		<div
			transition:fly
			class="absolute z-10 flex flex-col top-5 left-1/2 transform -translate-x-1/2 w-[95%] h-[335px] bg-primary rounded-[17px] shadow"
		>
			<div class="flex p-4 justify-between items-center">
				<a href="/">
					<img
						class="w-[52px] h-[52px] shadow-lg rounded-full"
						src="/images/logo-dark-pencil.png"
						alt="logo"
					/>
				</a>
				<button on:click={handleIsOpen}>
					<img class="w-6 h-6 relative" src="/images/x-close.svg" alt="close button" />
				</button>
			</div>
			<div class="flex flex-col p-4 gap-6">
				<ul class="p-0 m-0 list-none text-slate-200">
					<li class="mb-6">
						<a
							href="/content"
							class=" text-lg font-normal font-body hover:text-white hover:underline">Content</a
						>
					</li>
					<li class="mb-6">
						<a
							href="/code-of-conduct"
							class=" text-lg font-normal font-body hover:text-white hover:underline"
							>Code of Conduct</a
						>
					</li>
					<li class="mb-6">
						<a
							href="https://github.com/Learn-Build-Teach"
							class=" text-lg font-normal font-body hover:text-white hover:underline">Github Repo</a
						>
					</li>
					<li class="mb-6">
						<a
							href="https://discord.gg/vM2bagU"
							class=" text-lg font-normal font-body hover:text-white hover:underline"
							>Join on Discord</a
						>
					</li>
				</ul>
			</div>
		</div>
	{/if}
</nav>
