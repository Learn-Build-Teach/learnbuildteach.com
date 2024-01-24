<script lang="ts">
	import type { IFaq } from '$src/types/IFaq';
	export let faq: IFaq;
	let open = false;
</script>

<div>
	<div>
		<h2>{faq.question}</h2>
		<button on:click={() => (open = !open)}>
			<img
				src={open ? '/images/arrow-up.svg' : '/images/arrow-down.svg'}
				alt="expand/close button"
			/>
		</button>
	</div>
</div>
