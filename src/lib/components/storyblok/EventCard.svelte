<script>
	import { storyblokEditable } from '@storyblok/svelte';
	export let event;
</script>

<a href="/events/{event.slug}" use:storyblokEditable={event}>
	{event.name}
</a>
