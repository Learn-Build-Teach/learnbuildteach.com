<script>
	import ShareCard from '$components/shares/shareCard.svelte';
	import CardList from '$components/CardList.svelte';
	import { shares } from '$stores/sharesStore';
</script>

<article>
	<h1>Recent Content from the LBT Community!</h1>

	{#if $shares && $shares.length > 0}
		<CardList cards={$shares} let:card>
			<ShareCard share={card} />
		</CardList>
	{/if}
</article>
