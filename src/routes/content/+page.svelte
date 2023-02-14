<script lang="ts">
	import ShareCard from '$components/shares/shareCard.svelte';
	import CardList from '$components/CardList.svelte';
	import { onMount } from 'svelte';
	import { loadShares, shares } from '$stores/sharesStore';

	onMount(async () => {
		loadShares();
	});

	let page = 0;

	const handleLoadMore = () => {
		page++;
		loadShares(page);
	};
</script>

<article>
	<h1>Recent Content from the LBT Community!</h1>

	{#if $shares && $shares.length > 0}
		<CardList cards={$shares} let:card>
			<ShareCard share={card} />
		</CardList>
	{/if}
	<button on:click={handleLoadMore}>Load More</button>
</article>
