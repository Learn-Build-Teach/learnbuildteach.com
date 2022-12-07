<script>
	import ShareCard from '$components/shares/shareCard.svelte';
	import { shares } from '$stores/sharesStore';
</script>

<article>
	<h1>Recent Content from the LBT Community!</h1>
	<ul class="card-list">
		{#each $shares as share}
			<ShareCard {share} />
		{/each}
	</ul>
</article>

<style>
	.card-list {
		display: flex;
		flex-wrap: wrap;
		gap: var(--gap-6);
	}
	ul {
		padding-left: 0px;
	}
	li {
		padding: var(--gap-2) 0;
	}
</style>
