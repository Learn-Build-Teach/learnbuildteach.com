<script>
	import Header from '$components/layout/header.svelte';
	import Footer from '$components/layout/footer.svelte';
	import '$styles/reset.css';
	import '$styles/root.css';
	import '$styles/typography.css';
</script>

<svelte:head>
	<title>Learn Build Teach</title>
	<link rel="icon" href="img/favicon.ico" />
	<meta property="og:url" content="https://learnbuildteach.netlify.app/" />
	<meta property="og:title" content="Learn Build Teach" />
	<meta
		property="og:description"
		content="The goal of Learn Build Teach is to provide a safe place for developers to well... learn, build, and teach!"
	/>
	<meta property="og:image" content="img/android-chrome-512x512.png" />
</svelte:head>

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
	}

	@media (min-width: 1024px) {
	}
</style>
