<script>
	import Head from '$components/layout/head.svelte'
	import Header from '$components/layout/header.svelte';
	import Footer from '$components/layout/footer.svelte';
	import '$styles/reset.css';
	import '$styles/root.css';
	import '$styles/typography.css';
</script>

<Head />

<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	:global(body) {
		background: var(--bg);
		color: var(--text);
		font-size: clamp(var(--text-base), 1rem + 1vw, var(--text-text-lg));
	}
	:global(#svelte) {
		overflow-x: hidden;
		width: 100%;
		min-height: 100vh;
		height: 100%;
		display: grid;
		gap: 1rem;
		grid-template-rows: auto 1fr auto;
		grid-template-columns: minmax(0, 1fr);
	}
	main {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		align-content: flex-start;
		width: 100%;
		max-width: var(--max-width);
		margin-inline: auto;
        padding: var(--gap-4);
	}

	@media (min-width: 1024px) {
	}
</style>
