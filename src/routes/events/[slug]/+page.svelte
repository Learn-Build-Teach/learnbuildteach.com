<script lang="ts">
	import { formatDate, formatTime } from '$src/lib/helpers/format-date.js';
	import RichTextRenderer from '$components/storyblok/RichTextRenderer.svelte';
	import Image from '$components/storyblok/Image.svelte';
	import { storyblokEditable } from '@storyblok/svelte';
	export let data;
	const { story } = data;
	const { content } = story;
</script>

<div use:storyblokEditable={story}>
	<div class="container mx-auto mb-12">
		<div
			class="flex flex-col justify-end py-12 border p-4 rounded-xl bg-primary-dark/20 relative  border-primary-dark/10 backdrop-blur"
		>
			<div
				class=" w-full -z-[8] h-full absolute top-0 left-0 rounded-xl bg-gradient-to-b from-black/50 backdrop-blur-sm"
			/>
			<div class="px-8 z-0">
				<h1 class="font-heading font-black text-4xl my-2 text-white">{content.name}</h1>
				<p class="text-gray-300">{content.description}</p>
			</div>
		</div>

		<div class="flex gap-2 items-center flex-wrap my-4  overflow-x-auto ">
			<span
				class="px-4 p-2 text-sm  p bg-primary-dark/70 hover:bg-primary-dark/90 rounded-xl backdrop-blur-lg cursor-pointer"
			>
				<span>
					{formatDate(content.start_date)}
				</span>
				<span class="font-semibold text-secondary">
					@ {formatTime(content.start_date)}
				</span>
			</span>
		</div>
		<a
			href={content.url.url}
			target="_blank"
			rel="noopener noreferrer"
			class="mb-8 hover:bg-secondary/100 text-lg bg-secondary/90 text-white border-none block max-w-max py-2 px-4  rounded-lg  transition-500 backdrop-filter backdrop-blur-lg"
		>
			Join now
		</a>
		<div class="grid gap-4 md:grid-cols-[70%_30%] relative">
			<RichTextRenderer body={content.body} />
			<div class="row-start-1 md:col-start-2">
				<div class=" sticky top-12 p-4 border border-primary-dark/50 rounded-md bg-primary-dark/50">
					{#if content.quick_note}
						<p class="mb-8 text-gray-300">{content.quick_note}</p>
					{/if}
					{#if content.socials}
						<span class="font-bold text-white"> Follow us</span>
						<ul class="mt-2 flex items-center gap-2">
							{#each content.socials as social}
								<li>
									<a href={social?.content?.url?.url} class="group" aria-label={social.name}>
										<Image
											image={social?.content?.icon}
											class="w-6 h-6 group-hover:scale-110 transition-transform object-cover"
										/>
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
