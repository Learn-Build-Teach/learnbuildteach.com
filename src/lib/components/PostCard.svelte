<script lang="ts">
	const backupImageUrl = '/images/logo-square-512x512.png';
	export let postContent: any;
</script>

<div class="flex flex-col justify-start mt-12 opacity-90 hover:opacity-100">
	<a href={postContent.link}>
		<img
			class="w-[375px] h-[211px] rounded-2xl object-cover"
			src={postContent.imageUrl || backupImageUrl}
			alt={postContent.description}
		/>
		<h2
			class="text-slate-200 md:text-[22px] max-w-[370px] text-lg font-semibold leading-[23px] mt-4"
		>
			{postContent.title}
		</h2>
	</a>
	<span class="text-slate-300 md:text-sm text-[11px] font-normal mt-2"
		>{new Date(postContent.createdAt).toLocaleDateString('en-us', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})}</span
	>
</div>
