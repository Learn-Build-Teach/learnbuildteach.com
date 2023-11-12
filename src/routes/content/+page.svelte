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
	<h1 class="text-4xl mb-4 text-center font-heading">Recent Content from the LBT Community!</h1>

	{#if $shares && $shares.length > 0}
		<CardList cards={$shares} let:card>
			<ShareCard share={card} />
		</CardList>
	{/if}
	<button
		class="bg-white text-primary rounded py-2 px-4 text-lg font-bold w-full"
		on:click={handleLoadMore}>Load More</button
	>
</article>
