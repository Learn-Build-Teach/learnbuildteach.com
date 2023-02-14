<script lang="ts">
	import { adminShares, loadAdminShares } from '$stores/sharesStore';
	import AdminShareCard from '$components/admin/AdminShareCard.svelte';
	import CardList from '$components/CardList.svelte';

	let page = 0;

	const handleLoadMore = () => {
		page++;
		loadAdminShares(page);
	};
</script>

<article>
	<h1>Recent Shares</h1>

	{#if $adminShares?.length > 0}
		<CardList cards={$adminShares} let:card>
			<AdminShareCard share={card} />
		</CardList>
	{/if}
	<button on:click={handleLoadMore}>Load More</button>
</article>
