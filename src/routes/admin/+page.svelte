<script lang="ts">
	import { adminShares } from '$stores/sharesStore';
	import AdminShareCard from '$components/admin/AdminShareCard.svelte';
	import CardList from '$components/CardList.svelte';
</script>

<article>
	<h1>Recent Shares</h1>

	{#if $adminShares?.length > 0}
		<CardList cards={$adminShares} let:card>
			<AdminShareCard share={card} />
		</CardList>
	{/if}
</article>
