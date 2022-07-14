<script>
	import { onMount } from 'svelte';

	export let content;
	onMount(async () => {
		console.log('mounting');
		try {
			const res = await fetch('/api/shares');
			const shares = await res.json();
			content = shares;
		} catch (err) {
			console.error('Content Load Function', err);
		}
	});
</script>

<article>
	<h1>Recent Content from the LBT Community!</h1>
	{JSON.stringify(content)}
	{#if content}
		<ul>
			{#each content as item}
				<li>
					<a target="_blank" href={item.link}>
						{item.title}
						{item.username ? `by ${item.username}` : ''}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</article>

<style>
	ul {
		padding-left: 0px;
	}
	li {
		padding: var(--gap-2) 0;
	}
</style>
