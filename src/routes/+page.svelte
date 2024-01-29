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
	import HomeCard from '$components/HomeCard.svelte';
	import JoinDiscordBtn from '$components/JoinDiscordBtn.svelte';
	import PostCard from '$components/PostCard.svelte';
	import { cardContent } from '$src/LBTCardContent';
	import { postCardContent } from '$src/PostCardContent';
	import { faqContent } from '$src/FaqContent';
</script>

<!-- --------------HERO SECTION-------------------- -->
<article
	class="flex flex-col px-6 blur-effect md:justify-center md:items-center md:text-center md:mt-20 md:max-w-7xl md:mx-auto relative"
>
	<div class="font-heading text-left">
		<span class="text-[41px] md:text-[64px] font-bold font-body text-white">LEARN.</span>
		<span class="text-[41px] md:text-[64px] font-bold font-body text-secondary">BUILD</span>
		<span class="text-[41px] md:text-[64px] font-bold font-body text-white">.</span>
		<span class="text-[41px] md:text-[64px] font-bold font-body text-white">TEACH</span>
	</div>
	<div
		class="py-3 text-slate-300 text-sm font-normal font-body md:text-center md:text-[26px] md:w-[930px]"
	>
		<p>
			Our Discord server is a friendly place to ask web development questions and engage in
			discussions. Catered to seasoned experts or beginners
		</p>
	</div>
	<JoinDiscordBtn />
	<!-- ----------- Skeletons only for lg screen size ------------------- -->
	<div
		class="px-4 py-2 lg:block lg:w-[182px] lg:h-[51px] flex-shrink-0 rounded-xl bg-[#457B9D21]  absolute left-[-140px] top-[120px] hidden"
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
		class="w-10 h-10 lg:block rounded-full absolute left-[-185px] top-[160px] hidden"
		src="/images/james-icon.png"
		alt="face icon"
	/>

	<div
		class="px-4 py-2 lg:block lg:w-[182px] lg:h-[51px] flex-shrink-0 rounded-xl bg-[#457B9D21] absolute right-[-10px] top-[320px] hidden"
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
		class="w-10 h-10 lg:block rounded-full absolute right-[-60px] top-[350px] hidden"
		src="/images/amy-icon.png"
		alt="face icon"
	/>
	<!-- -------------------------- END OF SKELETONS SECTION ----------------------- -->
	<div class="flex justify-left items-center px-2 py-2 gap-4">
		<div
			class="flex justify-center items-center text-[0.60106rem] text-gray leading-normal tracking-tighter gap-1 md:text-[18px]"
		>
			<img
				class="md:w-[18px] md:h-[18px] md:flex-shrink-0"
				src="/images/online-icon.svg"
				alt="green dot"
			/>
			<span>551 Online</span>
		</div>
		<div
			class="flex justify-center items-center text-[0.60106rem] text-gray font-normal leading-normal tracking-tighter gap-1 md:text-[18px]"
		>
			<img
				class="md:w-[18px] md:h-[18px] md:flex-shrink-0"
				src="/images/total-users.svg"
				alt="gray dot"
			/>
			<span>5,426 Members</span>
		</div>
	</div>
</article>
<!-- --------------END OF HERO SECTION--------------- -->

<!-- ------------- HOME PAGE CARDS SECTION ---------- -->
<div
	class="md:max-w-7xl md:mx-auto md:grid md:grid-cols-3 md:grid-rows-6 flex flex-col justify-center items-center px-8 gap-8 mt-32"
>
	<!-- Renders every generic card  -->
	<div
		class="md:col-span-2 md:justify-center md:h-full md:border-none md:order-1 flex flex-col py-4 px-4 bg-slate-800 rounded-[10.27px] shadow border border-slate-500"
	>
		<img class="w-5 h-5" src="/images/book-icon.svg" alt="book icon" />
		<span class="text-slate-300 text-opacity-70 text-[10px] font-normal mt-4"
			>Embark on a Journey of Learning</span
		>
		<h2 class="text-white text-lg font-bold">We learn because we have to</h2>
		<p class="mt-2 text-neutral-300 text-sm font-normal">
			Our Discord channels are filled with resources, tutorials, and fellow developers that are more
			than willing to assist you along your learning journey!
		</p>
	</div>
	<div
		class="md:col-span-1 md:justify-center md:h-full md:border-none md:order-2 flex flex-col items-start py-4 px-4 bg-slate-800 rounded-[10.27px] shadow border border-slate-500"
	>
		<img class="w-5 h-5" src="/images/console-icon.svg" alt="console icon" />
		<span class="text-slate-300 text-opacity-70 text-[10px] font-normal mt-4"
			>Bring Your Ideas to Life</span
		>
		<h2 class="text-white text-lg font-bold">We build because we can</h2>
		<p class="mt-2 text-neutral-300 text-sm font-normal">
			From coding challenges to group projects, unleash your creativity and amplify your impact
			within our vibrant community
		</p>
	</div>
	<div
		class="md:col-span-2 md:justify-center md:h-full md:border-none md:order-4 flex flex-col items-start py-4 px-4 bg-slate-800 rounded-[10.27px] shadow border border-slate-500"
	>
		<img class="w-5 h-5" src="/images/chat-bubble-icon.svg" alt="chat-bubble icon" />
		<span class="text-slate-300 text-opacity-70 text-[10px] font-normal mt-4"
			>Empower Others Through Teaching</span
		>
		<h2 class="text-white text-lg font-bold">We teach because we care</h2>
		<p class="mt-2 text-neutral-300 text-sm font-normal">
			Contribute to our knowledge base, lead workshops, and empower the community by becoming a
			guiding force in the world of web development
		</p>
	</div>
	<!-- Renders the last and different one with profile pictures -->
	<div
		class="md:col-span-1 md:justify-center md:h-full md:border-none md:order-3 flex flex-col items-start py-4 px-4 bg-slate-800 rounded-[10.27px] shadow border border-slate-500"
	>
		<div class="flex justify-center items-center w-full">
			<img
				class="w-12 h-12 rounded-full flex-shrink-0"
				src="/images/discovery-icon.png"
				alt="discovery icon"
			/>
			<div class="flex items-center flex-grow flex-shrink-0 ml-4">
				<img class="w-5 h-5 rounded-full" src="/images/james-icon.png" alt="james icon" />
				<img class="w-5 h-5 rounded-full -ml-1" src="/images/amy-icon.png" alt="amy icon" />
				<img
					class="w-5 h-5 rounded-full -ml-1"
					src="/images/brittney-icon.png"
					alt="brittney icon"
				/>
			</div>
			<a href="/">
				<img
					class="w-4 h-4 flex-shrink-0 ml-auto"
					src="/images/arrow-right.svg"
					alt="arrow right"
				/>
			</a>
		</div>

		<h2 class="text-white text-lg font-bold mt-4">Ready to dive in?</h2>
		<p class="mt-2 text-neutral-300 text-sm font-normal">
			Join our Discord server today and become part of a vibrant community dedicated to web
			development excellence
		</p>
	</div>
</div>
<hr class="mx-auto w-[282px] h-[0px] opacity-50 border-white mt-12" />
<!-- ------------- END OF HOME PAGE CARDS SECTION ---------- -->

<!-- ------------- POST SECTION ------------- -->
<div class="flex flex-col p-6 mt-20">
	<h2 class="font-bold text-white text-3xl">Recent posts from the community</h2>
	{#each postCardContent as postContent}
		<PostCard {postContent} />
	{/each}
	<a
		href="/"
		class="w-full flex justify-center items-end mt-14 text-white text-base font-normal underline"
	>
		View all
	</a>
</div>
<!-- ------------- END OF POST SECTION ----------- -->

<!-- --------------- FAQ SECTION ------------- -->
<div class="flex flex-col p-6 justify-start mt-10 bg-slate-800 shadow">
	<h2 class="font-bold text-[28px] text-white">FAQs</h2>
	{#each faqContent as faq}
		<Accordion {faq} />
	{/each}
</div>
<!-- --------------- END OF FAQ SECTION ------------- -->

<!-- ------------------- SECOND CTA SECTION --------------- -->
<div class="flex flex-col justify-center items-center bg-primary-dark p-6">
	<img
		class="w-24 h-24 rounded-full mt-24"
		src="/images/discovery-banner.png"
		alt="discovery icon"
	/>
	<h2 class="text-white text-[28px] font-bold mt-6">Ready to dive in?</h2>
	<p class="text-center text-neutral-300 text-base font-normal mt-4">
		Join our Discord server today and become part of a vibrant community dedicated to web
		development excellence
	</p>
	<JoinDiscordBtn />
	<hr class="w-[282px] h-[0px] opacity-50 border-white mt-20" />
</div>

<!-- ------------------- END OF SECOND CTA SECTION --------------- -->
<style>
	.blur-effect {
		background: radial-gradient(50% 50% at 50% 50%, #1d3557 0%, #0f1b2b 100%);
		backdrop-filter: blur(14px);
	}
</style>
