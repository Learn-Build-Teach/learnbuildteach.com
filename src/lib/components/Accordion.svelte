<script lang="ts">
	import type { IFaq } from '$src/types/IFaq';
	export let faq: IFaq;
	let open = false;
</script>

<div>
	<div
		on:click={() => (open = !open)}
		on:keydown={() => null}
		class="flex justify-between items-center mt-12"
	>
		<h2 class="text-neutral-300 text-lg w-[286px] font-bold">{faq.question}</h2>
		<button>
			<img
				class="w-[18px] h-[18px]"
				src={open ? '/images/arrow-up.svg' : '/images/arrow-down.svg'}
				alt="expand/close button"
			/>
		</button>
	</div>
	{#if open}
		<p class="text-neutral-300 text-sm font-normal mt-6">{faq.answer}</p>
	{/if}
	<hr class="w-full h-[0px] opacity-50 border-white mt-8" />
</div>
