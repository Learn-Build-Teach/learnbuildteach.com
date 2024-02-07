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
	import Accordion from '$components/Accordion.svelte';
	import JoinDiscordBtn from '$components/JoinDiscordBtn.svelte';
	import PostCard from '$components/PostCard.svelte';
	import { faqContent } from '$src/FaqContent';
	import { loadShares, shares } from '$stores/sharesStore';
	import { onMount } from 'svelte';

	onMount(async () => {
		loadShares();
	});
</script>

<!-- --------------HERO SECTION-------------------- -->
<article
	class="flex flex-col px-6 blur-effect md:justify-center md:items-center md:text-center md:mt-32 mt-12 lg:max-w-7xl lg:mx-auto relative"
>
	<h1 class="font-heading text-left text-[41px] lg:text-[64px] md:text-[64px] font-bold text-white">
		LEARN. <span class="text-secondary">BUILD</span>. TEACH
	</h1>

	<div
		class="py-3 text-slate-300 text-sm font-normal font-body lg:text-center lg:text-[26px] md:text-[26px] lg:w-[930px]"
	>
		<p>
			A community of developers excited to share in your journey to learning, building, and
			teaching!
		</p>
	</div>
	<JoinDiscordBtn />
	<!-- ----------- Skeletons only for lg screen size ------------------- -->
	<div
		class="px-4 py-2 2xl:block 2xl:w-[182px] 2xl:h-[51px] flex-shrink-0 rounded-xl bg-[#457B9D21]  absolute left-[-140px] top-[120px] hidden"
	>
		<p class="text-[#A8ABAD] text-[7px] font-bold absolute top-[-10px]">#wins</p>
		<div class="flex justify-between">
			<span class="text-[7px] font-bold text-white">James Q. Quick</span>
			<span class="text-[7px] font-[300] text-white">12:27pm</span>
		</div>
		<div class="flex flex-col gap-1 mt-2">
			<div class="w-[95%] h-[6px] bg-[#D9D9D921] rounded-xl" />
			<div class="w-[85%] h-[6px] bg-[#D9D9D921] rounded-xl" />
		</div>
	</div>
	<img
		class="w-10 h-10 2xl:block rounded-full absolute left-[-185px] top-[160px] hidden"
		src="/images/james-icon.png"
		alt="face icon"
	/>

	<div
		class="px-4 py-2 2xl:block 2xl:w-[182px] 2xl:h-[51px] flex-shrink-0 rounded-xl bg-[#457B9D21] absolute right-[-10px] top-[320px] hidden"
	>
		<p class="text-[#A8ABAD] text-[7px] font-bold absolute top-[-10px]">#job-opportunities</p>
		<div class="flex justify-between">
			<span class="text-[7px] font-bold text-white">Amy Dutton</span>
			<span class="text-[7px] font-[300] text-white">3:27pm</span>
		</div>
		<div class="flex flex-col gap-1 mt-2">
			<div class="w-[95%] h-[6px] bg-[#D9D9D921] rounded-xl" />
			<div class="w-[85%] h-[6px] bg-[#D9D9D921] rounded-xl" />
		</div>
	</div>
	<img
		class="w-10 h-10 2xl:block rounded-full absolute right-[-60px] top-[350px] hidden"
		src="/images/amy-icon.png"
		alt="face icon"
	/>
	<!-- -------------------------- END OF SKELETONS SECTION ----------------------- -->
</article>
<!-- --------------END OF HERO SECTION--------------- -->

<!-- ------------- HOME PAGE CARDS SECTION ---------- -->
<div
	class="container xl:mx-auto xl:grid xl:grid-cols-3 xl:mt-60 md:mx-auto flex flex-col justify-center items-center px-8 gap-8 mt-20"
>
	<!-- Renders every generic card  -->
	<div
		class="xl:opacity-90 hover:opacity-100 xl:col-span-2 md:p-8 xl:h-full md:border-none xl:order-1 flex flex-col p-4 bg-slate-800 rounded-[10.27px] shadow border border-slate-500"
	>
		<img class="md:w-10 md:h-10 w-5 h-5" src="/images/book-icon.svg" alt="book icon" />
		<span class="text-slate-400 text-opacity-70 text-[10px] font-normal mt-4 md:text-xl xl:mt-20"
			>Embark on a Journey of Learning</span
		>
		<h2 class="text-white text-xl font-bold md:text-3xl xl:w-[90%]">
			We <span class="text-secondary">learn</span> because we have to.
		</h2>
		<p class="mt-2 text-slate-400 text-sm font-normal xl:mt-4 md:text-[22px]">
			Our Discord channels are filled with resources, tutorials, and fellow developers that are
			excited to assist you along your learning journey!
		</p>
	</div>
	<div
		class="xl:opacity-90 hover:opacity-100 xl:col-span-1 xl:justify-center md:p-8 xl:h-full md:border-none xl:order-2 flex flex-col items-start p-4 bg-slate-800 rounded-[10.27px] shadow border border-slate-500"
	>
		<img class="md:w-10 md:h-10 w-5 h-5" src="/images/console-icon.svg" alt="console icon" />
		<span class="text-slate-400 text-opacity-70 text-[10px] font-normal mt-4 md:text-xl xl:mt-20"
			>Bring Your Ideas to Life</span
		>
		<h2 class="text-white text-lg font-bold md:text-3xl">
			We <span class="text-secondary">build</span> because we can.
		</h2>
		<p class="mt-2 text-slate-400 text-sm font-normal md:text-[22px]">
			From coding challenges to group projects, unleash your creativity and amplify your impact
			within our vibrant community.
		</p>
	</div>
	<div
		class="xl:opacity-90 hover:opacity-100 xl:col-span-2 xl:h-full md:p-8 md:border-none xl:order-4 flex flex-col items-start p-4 bg-slate-800 rounded-[10.27px] shadow border border-slate-500"
	>
		<img
			class="md:w-10 md:h-10 w-5 h-5"
			src="/images/chat-bubble-icon.svg"
			alt="chat-bubble icon"
		/>
		<span class="text-slate-400 text-opacity-70 text-[10px] font-normal mt-4 md:text-xl xl:mt-20"
			>Empower Others Through Teaching</span
		>
		<h2 class="text-white text-lg font-bold md:text-3xl">
			We <span class="text-secondary">teach</span> because we care
		</h2>
		<p class="mt-2 text-slate-400 text-sm font-normal md:text-[22px]">
			The best way to learn is to teach, and our community is the perfect place to share your
			expertise to help others grow.
		</p>
	</div>
	<!-- Renders the last and different one with profile pictures -->
	<a class="xl:order-3" href="https://discord.gg/vM2bagU">
		<div
			class="xl:opacity-90 hover:opacity-100 xl:col-span-1 xl:justify-center xl:items-center md:p-8 xl:h-full md:border-none flex flex-col items-start p-4 bg-slate-800 rounded-[10.27px] shadow border border-slate-500 relative"
		>
			<div class="xl:flex xl:flex-col xl:mt-12 flex justify-center items-center w-full">
				<img
					class="xl:w-20 xl:h-20 md:w-16 md:h-16 w-12 h-12 rounded-full flex-shrink-0"
					src="/images/discovery-banner.png"
					alt="discovery icon"
				/>
				<div class="xl:hidden flex items-center flex-grow flex-shrink-0 ml-4">
					<img
						class="md:w-8 md:h-8 w-5 h-5 rounded-full"
						src="/images/james-icon.png"
						alt="james icon"
					/>
					<img
						class="md:w-8 md:h-8 w-5 h-5 rounded-full -ml-1"
						src="/images/amy-icon.png"
						alt="amy icon"
					/>
					<img
						class="md:w-8 md:h-8 w-5 h-5 rounded-full -ml-1"
						src="/images/brittney-icon.png"
						alt="brittney icon"
					/>
				</div>
				<img
					class="xl:w-6 xl:h-6 md:w-5 md:h-5 w-4 h-4 flex-shrink-0 ml-auto xl:absolute right-6 top-6"
					src="/images/arrow-right.svg"
					alt="arrow right"
				/>
			</div>
			<!-- ------------------ Renders the same profile pictures component but with different layout in lg screens ---------------- -->
			<h2 class="text-white text-lg font-bold mt-4 md:text-3xl">Ready to dive in?</h2>
			<p class="mt-2 text-slate-400 text-sm font-normal md:text-[22px] xl:text-center">
				Join our Discord today and become part of our developer community.
			</p>

			<div class="xl:flex xl:items-center xl:flex-grow xl:mt-4 flex-shrink-0 ml-4 hidden">
				<img
					class="xl:w-8 xl:h-8 md:w-6 md:h-6 w-5 h-5 rounded-full"
					src="/images/james-icon.png"
					alt="james icon"
				/>
				<img
					class="xl:w-8 xl:h-8 md:w-6 md:h-6 w-5 h-5 rounded-full -ml-1"
					src="/images/amy-icon.png"
					alt="amy icon"
				/>
				<img
					class="xl:w-8 xl:h-8 md:w-6 md:h-6 w-5 h-5 rounded-full -ml-1"
					src="/images/brittney-icon.png"
					alt="brittney icon"
				/>
			</div>
		</div>
	</a>
</div>
<hr class="mx-auto w-[282px] h-[0px] opacity-50 border-white mt-12 xl:w-[65%] xl:mt-44" />
<!-- ------------- END OF HOME PAGE CARDS SECTION ---------- -->

<!-- ------------- POST SECTION ------------- -->
<div class="container mx-auto lg:mt-48 mt-16 relative blur-effect">
	<div class="flex justify-between items-center px-6">
		<h2 class="font-bold text-white text-3xl md:text-[42px] md:text-center">
			Recent posts from the community
		</h2>
		<a
			href="/content"
			class="lg:inline lg:w-20 md:text-xl w-full justify-center items-end text-white text-base font-normal underline hidden opacity-90 hover:opacity-100"
		>
			View all
		</a>
	</div>
	<div
		class="lg:flex-row lg:justify-between lg:items-baseline md:justify-between md:items-center flex flex-col items-center p-6 mt-6 gap-6"
	>
		{#each $shares.slice(0, 3) as postContent (postContent.id)}
			<PostCard {postContent} />
		{/each}
		<a
			href="/content"
			class="lg:hidden lg:w-20 md:text-xl w-full flex justify-center items-end mt-14 text-white text-base font-normal underline opacity-90 hover:opacity-100"
		>
			View all
		</a>
	</div>
</div>
<!-- ------------- END OF POST SECTION ----------- -->

<!-- --------------- FAQ SECTION ------------- -->
<div
	class="md:w-[85%] md:rounded-3xl md:py-16 md:px-24 md:mt-40 md:mx-auto flex flex-col py-6 px-16 justify-start mt-10 bg-slate-800 shadow"
>
	<h2 class="md:text-[42px] font-bold text-[28px] text-white">FAQs</h2>
	{#each faqContent as faq}
		<Accordion {faq} />
	{/each}
</div>
<!-- --------------- END OF FAQ SECTION ------------- -->

<!-- ------------------- SECOND CTA SECTION --------------- -->
<div class="md:mt-40 flex flex-col justify-center items-center bg-primary-dark p-6">
	<img
		class="md:w-[172px] md:h-[170px] w-24 h-24 rounded-full mt-24"
		src="/images/discovery-banner.png"
		alt="discovery icon"
	/>
	<h2 class="text-white md:text-[42px] text-[28px] font-bold mt-20">Ready to dive in?</h2>
	<p class="md:text-2xl text-center text-neutral-300 text-base font-normal mt-4">
		Join our Discord today and become part of our developer community.
	</p>
	<JoinDiscordBtn />
	<hr class="md:w-[55%] md:mt-32 w-[282px] h-[0px] opacity-50 border-white mt-20" />
</div>

<!-- ------------------- END OF SECOND CTA SECTION --------------- -->
<style>
	.blur-effect {
		background: radial-gradient(50% 50% at 50% 50%, #1d3557 0%, #0f1b2b 100%);
		backdrop-filter: blur(14px);
	}
</style>
