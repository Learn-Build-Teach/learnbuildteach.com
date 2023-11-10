<script lang="ts">
	export let cards: any[];
</script>

<ul class="flex flex-wrap gap-8 my-6">
	{#each cards as card}
		<slot {card} />
	{/each}
</ul>
