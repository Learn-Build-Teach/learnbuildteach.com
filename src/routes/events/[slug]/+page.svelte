<script>
	import { storyblokEditable, renderRichText } from '@storyblok/svelte';
	export let data;
	const { story } = data;
	const { content } = story;
	$: resolvedRichText = renderRichText(content.body);
</script>

<div use:storyblokEditable={story}>
	<div class="container mx-auto mb-12">
		<h1 class="text-6xl text-[#50b0ae] font-bold mt-12 mb-4">{content.name}</h1>
		<div class="prose prose-light">{@html resolvedRichText}</div>
	</div>
</div>
