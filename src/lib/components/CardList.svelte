<script lang="ts">
	export let cards: any[];
</script>

<ul>
	{#each cards as card}
		<slot {card} />
	{/each}
</ul>

<style>
	ul {
		padding-left: 0px;
		display: flex;
		flex-wrap: wrap;
		gap: var(--gap-6);
	}
</style>
