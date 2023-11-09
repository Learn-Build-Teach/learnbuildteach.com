<script lang="ts">
	import ShareCard from '$components/shares/shareCard.svelte';
	import CardList from '$components/CardList.svelte';
	import { onMount } from 'svelte';
	import { loadShares, shares } from '$stores/sharesStore';
	import { supabase } from '$src/lib/helpers/supabase';
	import DummyCard from './DummyCard.svelte';

	onMount(async () => {
		if (supabase) {
			loadShares();
		}
	});

	let page = 0;

	const handleLoadMore = () => {
		if (supabase) {
			page++;
			loadShares(page);
		}
	};
</script>

<article>
	<h1>Recent Content from the LBT Community!</h1>

	{#if $shares && $shares.length > 0}
		<CardList cards={$shares} let:card>
			<ShareCard share={card} />
		</CardList>
	{:else}
		<ul>
			<DummyCard />
			<DummyCard />
			<DummyCard />
			<DummyCard />
		</ul>
	{/if}
	<button on:click={handleLoadMore}>Load More</button>
</article>

<style>
	ul {
		padding-left: 0px;
		display: flex;
		flex-wrap: wrap;
		gap: var(--gap-6);
	}
</style>
