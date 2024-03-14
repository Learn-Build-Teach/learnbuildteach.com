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

<article class="w-full">
	<h1 class="text-4xl mb-4 text-center font-heading w-full">Recent Shares</h1>

	{#if $adminShares?.length > 0}
		<CardList cards={$adminShares} let:card>
			<AdminShareCard share={card} />
		</CardList>
	{/if}
	<button
		class="bg-white text-primary rounded py-2 px-4 text-lg font-bold w-full"
		on:click={handleLoadMore}
	>
		Load More
	</button>
	<!-- Need to add here link to go to the review project page /projects/review -->
</article>
