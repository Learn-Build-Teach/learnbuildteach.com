<script lang="ts">
	import type { Event } from '$types/storyblok';
	import Image from './Image.svelte';

	export let event: Event;
	const { content } = event;
</script>

<a href="/events/{event.slug}">
	<Image image={content.cover} class="aspect-video object-cover rounded-xl w-full" />
	<h2 class="text-xl leading-7 mt-3 font-heading">
		{content.name}
	</h2>
	<span>
		{new Date(event.published_at).toLocaleDateString('en-us', {
			weekday: 'long',
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		})}
	</span>
</a>
