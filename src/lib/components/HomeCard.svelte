<script lang="ts">
	import type { ICardContent } from '$src/types/ICardContent';

	export let content: ICardContent;
</script>

<div
	class="flex flex-col items-start py-4 px-4 bg-slate-800 rounded-[10.27px] shadow border border-slate-500"
>
	<img class="w-5 h-5" src={content.icon} alt="book icon" />
	<span class="text-slate-300 text-opacity-70 text-[10px] font-normal mt-4"
		>{content.preHeader}</span
	>
	<h2 class="text-white text-lg font-bold">{content.header}</h2>
	<p class="mt-2 text-neutral-300 text-sm font-normal">{content.body}</p>
</div>
