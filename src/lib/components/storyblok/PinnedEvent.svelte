<script lang="ts">
	import Image from './Image.svelte';
	import type { SbBlokData } from '@storyblok/svelte';
	import type { PinnedEvent } from '$types/storyblok';
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok: SbBlokData & PinnedEvent;
	const { event } = blok;
</script>

<section
	class="flex flex-col justify-end py-12 border p-4 rounded-xl bg-primary-dark/50 relative min-h-[400px] border-primary-dark/20 backdrop-blur"
>
	<Image
		image={event.content.cover}
		class="-z-10 w-full rounded-xl top-0 h-full left-0 absolute object-cover gradient-mask"
	/>
	<div
		class="w-full -z-[8] h-full absolute top-0 left-0 rounded-xl bg-gradient-to-t from-black/20"
	/>
	<div class="px-8 z-0" use:storyblokEditable={blok}>
		<span class="text-white bg-secondary px-2 font-bold mb-2 inline-block py-1 text-xs rounded-full"
			>{blok.title}</span
		>
		<h1 class="font-heading font-black text-4xl my-2 text-white">{event.content.name}</h1>
		<p class="mb-8 text-gray-300">{event.content.description}</p>
		<a
			href={blok.cta_url.url}
			target="_blank"
			rel="noreferrer noopener"
			class="bg-white border-none block max-w-max py-2 px-4 mb-4 rounded-lg text-primary hover:bg-accent transition-500"
		>
			{blok.cta_title}
		</a>
	</div>
</section>
