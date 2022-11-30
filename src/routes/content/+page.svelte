<script>
	import { content } from '$lib/stores/contentStore';
</script>

<article>
	<h1>Recent Content from the LBT Community!</h1>
	<ul>
		{#each $content as item}
			<li>
				<a target="_blank" rel="noreferrer" href={item.link}>
					{item.title} by {item.user.username}
				</a>
			</li>
		{/each}
	</ul>
</article>

<style>
	ul {
		padding-left: 0px;
	}
	li {
		padding: var(--gap-2) 0;
	}
</style>
