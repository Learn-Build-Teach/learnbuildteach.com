<script lang="ts">
	const loadInsights = async () => {
		try {
			const res = await fetch('http://localhost:3000/api/server-insights');
			const {
				data: { totalMembers }
			} = await res.json();
			if (res.status === 500) {
				throw new Error('API request failed');
			}
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
		<p>Total members {insights?.totalMembers}</p>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
	<button on:click={handleReload}>Reload Data</button>
</article>
