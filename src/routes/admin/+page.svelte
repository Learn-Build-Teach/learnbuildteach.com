<script lang="ts">
	import { adminShares } from '$stores/sharesStore';
	import ShareCard from '$components/admin/AdminShareCard.svelte';
</script>

<h2>Recent Shares</h2>
<ul class="card-list">
	{#each $adminShares as share}
		<ShareCard {share} />
	{/each}
</ul>

<style>
	.card-list {
		display: flex;
		flex-wrap: wrap;
		gap: var(--gap-6);
	}
</style>
