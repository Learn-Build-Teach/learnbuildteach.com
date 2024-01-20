<script>
	import EventCard from '$components/storyblok/EventCard.svelte';
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';

	export let data;
	onMount(() => {
		useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
	});
</script>

<div>
	{#if data.story}
		<StoryblokComponent blok={data.story.content} />
	{/if}
	<div class="py-12">
		<h2 class="text-2xl leading-7 mt-4 mb-4  font-heading">Upcoming Events</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-4">
			{#if data.stories}
				{#each data.stories as story}
					<EventCard event={story} />
				{/each}
			{/if}
		</div>
	</div>
</div>
