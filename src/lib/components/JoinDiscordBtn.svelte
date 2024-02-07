<script lang="ts">
	import { onMount } from 'svelte';
	import { loadDiscordMemberInsights } from '$stores/discordStore';
	import { totalServerMembers, currentOnlineMembers } from '$stores/discordStore';
	import { fade } from 'svelte/transition';

	onMount(() => {
		loadDiscordMemberInsights();
	});
</script>

<a
	href="https://discord.gg/vM2bagU"
	class="w-[190.80px] h-[43.89px] lg:w-auto lg:h-auto md:w-auto md:h-auto lg:mt-20 px-4 py-3 mt-10  bg-[#fff] rounded-lg flex items-center gap-4"
>
	<img
		src="/images/discord-logo.svg"
		alt="discord-logo"
		class="w-[29.71px] h-[22.52px] lg:w-[55px] lg:h-[42px] md:w-[55px] md:h-[42px]"
	/>
	<div class="text-primary text-[14.96px] font-normal font-body lg:text-[28px] md:text-[20px]">
		Join on Discord
	</div>
</a>
<div class="flex justify-left items-center px-2 py-2 gap-4 h-16">
	<div
		class="flex justify-center items-center text-[0.60106rem] text-gray leading-normal tracking-tighter gap-1 lg:text-[18px] md:text-[18px]"
	>
		{#if $currentOnlineMembers}
			<img
				class="lg:w-[18px] lg:h-[18px] lg:flex-shrink-0 md:w-[18px] md:h-[18px] md:flex-shrink-0"
				src="/images/online-icon.svg"
				alt="green dot"
			/>
			<span transition:fade>{$currentOnlineMembers} online</span>
		{/if}
	</div>
	<div
		class="flex justify-center items-center text-[0.60106rem] text-gray font-normal leading-normal tracking-tighter gap-1 lg:text-[18px] md:text-[18px]"
	>
		{#if $totalServerMembers}
			<img
				class="lg:w-[18px] lg:h-[18px] lg:flex-shrink-0 md:w-[18px] md:h-[18px] md:flex-shrink-0"
				src="/images/total-users.svg"
				alt="gray dot"
			/>
			<span transition:fade>{$totalServerMembers} members</span>
		{/if}
	</div>
</div>
