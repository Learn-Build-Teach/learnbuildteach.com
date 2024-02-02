<script lang="ts">
	import type { Post } from '$src/types/post';

	export let postContent: Post;
</script>

<div class="flex flex-col justify-start mt-12 opacity-100 hover:opacity-90">
	<a href={postContent.link}>
		<img
			class=" w-[330px] h-[211px] rounded-2xl"
			src={postContent.imageUrl}
			alt="postContent thumbnail"
		/>
		<h2
			class="text-slate-200 md:text-[22px] md:max-w-[300px] text-lg font-semibold leading-[23px] mt-4"
		>
			{postContent.title}
		</h2>
	</a>
	<span class="text-slate-300 md:text-sm text-[11px] font-normal mt-2">{postContent.pubDate}</span>
</div>
