<script lang="ts">
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
	{#if data.stories}
		{#each data.stories as story}
			<EventCard event={story} />
		{/each}
	{/if}
</div>
