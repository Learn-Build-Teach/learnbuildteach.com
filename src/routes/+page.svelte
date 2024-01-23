<!-- <article class="flex flex-col gap-6">
	<h1 class="font-heading font-black text-4xl text-left">
		Welcome to the Learn Build Teach Community!
	</h1>
	<p class="text-lg mb-3">
		Learn Build Teach is a welcoming and open community of web developers. Whether you are a
		seasoned expert or just getting started in the field of development, you can be certain our
		Discord server remains a friendly place to ask questions and engage in discussions.
	</p>
	<div class="button-wrapper">
		<a
			href="https://discord.gg/vM2bagU"
			target="_blank"
			rel="noreferrer noopener"
			class="bg-white border-none py-2 px-4 rounded-lg text-primary hover:bg-accent transition-500"
		>
			Join the Discord
		</a>
	</div>
</article> -->
<script lang="ts">
	import HomeCard from '$components/HomeCard.svelte';
	import { cardContent } from '$src/LBTCardContent';
</script>

<article class="flex flex-col items-left blur-effect">
	<div class="w-[330px] p-3 font-heading text-left">
		<span class="text-[42px] font-bold font-body text-white">LEARN.</span>
		<span class="text-[42px] font-bold font-body text-secondary">BUILD</span>
		<span class="text-[42px] font-bold font-body text-white">. TEACH</span>
	</div>
	<div class="w-[332px] p-3 text-slate-300 text-sm font-normal font-body text-left">
		<p>
			Our Discord server is a friendly place to ask web development questions and engage in
			discussions. Catered to seasoned experts or beginners
		</p>
	</div>
	<a
		href="https://discord.gg/vM2bagU"
		class="w-[190.80px] h-[43.89px] px-4 py-3 ml-3 mt-10 bg-[#fff] rounded-lg flex items-center gap-4"
	>
		<img src="/images/discord-logo.svg" alt="discord-logo" class="w-[29.71px] h-[22.52px]" />
		<div class="text-primary text-[14.96px] font-normal font-body">Join on Discord</div>
	</a>
	<div class="flex justify-left items-center px-4 py-2 gap-4">
		<div
			class="flex justify-center items-center text-[0.60106rem] text-gray leading-normal tracking-tighter gap-1"
		>
			<img src="/images/online-icon.svg" alt="green dot" />
			<span>551 Online</span>
		</div>
		<div
			class="flex justify-center items-center text-[0.60106rem] text-gray font-normal leading-normal tracking-tighter gap-1"
		>
			<img src="/images/total-users.svg" alt="gray dot" />
			<span>5,426 Members</span>
		</div>
	</div>
</article>

<!-- --------------END OF HERO SECTION--------------- -->

<div class="flex flex-col justify-center items-center px-8 gap-8 mt-32">
	{#each cardContent as content}
		<HomeCard {content} />
	{/each}
	<div
		class="flex flex-col items-start py-4 px-4 bg-slate-800 rounded-[10.27px] shadow border border-slate-500"
	>
		<div class="flex justify-center items-center w-full">
			<img
				class="w-12 h-12 rounded-full flex-shrink-0"
				src="/images/discovery-icon.png"
				alt="discovery icon"
			/>
			<div class="flex items-center flex-grow flex-shrink-0 ml-4">
				<img class="w-5 h-5 rounded-full" src="/images/james-icon.png" alt="james icon" />
				<img class="w-5 h-5 rounded-full -ml-2" src="/images/amy-icon.png" alt="amy icon" />
				<img
					class="w-5 h-5 rounded-full -ml-2"
					src="/images/brittney-icon.png"
					alt="brittney icon"
				/>
			</div>
			<img class="w-4 h-4 flex-shrink-0 ml-auto" src="/images/arrow-right.svg" alt="arrow right" />
		</div>

		<h2 class="text-white text-lg font-bold mt-4">Ready to dive in?</h2>
		<p class="w-[294px] mt-2 text-neutral-300 text-sm font-normal">
			Join our Discord server today and become part of a vibrant community dedicated to web
			development excellence
		</p>
	</div>
</div>

<style>
	.blur-effect {
		background: radial-gradient(50% 50% at 50% 50%, #1d3557 0%, #0f1b2b 100%);
		backdrop-filter: blur(14px);
	}
</style>
