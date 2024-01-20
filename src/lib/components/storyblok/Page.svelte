<script lang="ts">
	import type { SbBlokData } from '@storyblok/svelte';
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';

	export let blok: SbBlokData;
</script>

<div use:storyblokEditable={blok}>
	{#each blok.body as blok}
		<StoryblokComponent {blok} />
	{/each}
</div>
