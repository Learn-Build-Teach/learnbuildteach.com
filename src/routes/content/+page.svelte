<script lang="ts">
	import ShareCard from '$components/shares/shareCard.svelte';
	import CardList from '$components/CardList.svelte';
	import { onMount } from 'svelte';
	import { loadShares, shares } from '$stores/sharesStore';

	onMount(async () => {
		loadShares();
	});
</script>

<article>
	<h1>Recent Content from the LBT Community!</h1>

	{#if $shares && $shares.length > 0}
		<CardList cards={$shares} let:card>
			<ShareCard share={card} />
		</CardList>
	{/if}
</article>
