<script lang="ts">
	import type { SBImage } from '$types/storyblok';
	/*
	 * TODO: Will have to add image optimization features based on Storyblok docs
	 */
	export let image: SBImage;
</script>

<img alt={image.alt} src={image.filename} {...$$restProps} />
