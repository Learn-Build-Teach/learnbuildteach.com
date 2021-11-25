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
	<link rel="manifest" href="/manifest.json" />
	<link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@jamesqquick" />
	<meta name="twitter:creator" content="@jamesqquick" />
	<meta property="og:url" content="https://learnbuildteach.netlify.app/" />
	<meta property="og:title" content="Learn Build Teach" />
	<meta
		property="og:description"
		content="The goal of Learn Build Teach is to provide a safe place for developers to well... learn, build, and teach!"
	/>
	<meta property="og:image" content="img/android-chrome-512x512.png" />
	<meta property="og:image:alt" content="Learn Build Teach" />
	<meta property="og:image:width" content="512" />
	<meta property="og:image:height" content="512" />
	<meta property="og:site_name" content="Learn Build Teach" />
	<link rel="canonical" href="https://learnbuildteach.netlify.app" />
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
