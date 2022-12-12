<script lang="ts">
	import type { Kudo, KudoWithUsernames, Leader } from '$src/types/supabase';
	import { getKudosLeaderboard, kudosByMonth, loadKudosByMonth } from '$stores/kudosStore';
	import { onMount } from 'svelte';

	let leaderboard: Leader[];
	onMount(() => {
		loadKudosByMonth();
	});

	const calculateLeaderboard = (kudos: KudoWithUsernames[]) => {
		if (kudos?.length > 0) {
			leaderboard = getKudosLeaderboard(kudos);
			console.log(leaderboard);
		}
	};

	$: calculateLeaderboard($kudosByMonth);
</script>

<h1>Monthly Kudos Leaderboard</h1>

{#if leaderboard}
	{#each leaderboard as leader}
		<p>{leader.username} - {leader.learnPoints} - {leader.buildPoints} - {leader.teachPoints}</p>
	{/each}
{/if}
