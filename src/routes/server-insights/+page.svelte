<script lang="ts">
	const loadInsights = async () => {
		try {
			const res = await fetch(
				'https://learn-build-teach-discord-bot.herokuapp.com/api/server-insights'
			);
			const {
				data: { totalMembers }
			} = await res.json();
			return { totalMembers };
		} catch (error) {
			console.error(error);
		}
	};
	const handleReload = () => {
		insightsPromise = loadInsights();
	};
	let insightsPromise = loadInsights();
</script>

<article>
	<h1>Server Insights</h1>
	{#await insightsPromise}
		<p>...waiting</p>
	{:then insights}
		<p>Total memmbers {insights?.totalMembers}</p>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
	<button on:click={handleReload}>Reload Data</button>
</article>
