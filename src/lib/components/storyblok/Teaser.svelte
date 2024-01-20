<script lang="ts">
	import type { SbBlokData } from '@storyblok/svelte';
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok: SbBlokData;
</script>

<h3 use:storyblokEditable={blok} class="py-8 mb-6 text-5xl font-bold text-center">
	{blok.headline}
</h3>
