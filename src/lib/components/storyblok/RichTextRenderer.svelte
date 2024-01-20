<script>
	import { renderRichText } from '@storyblok/svelte';

	/** @type {any} */
	export let body;
	$: resolvedRichText = renderRichText(body);
</script>

<div
	class="w-full prose max-w-max prose-p:mb-4 prose-a:text-secondary prose-ul:decoration-white marker:text-white prose-img:w-full 
    prose-img:rounded-xl prose-img:object-cover prose-headings:text-white prose-headings:font-heading text-white prose-li:text-white"
>
	{@html resolvedRichText}
</div>
