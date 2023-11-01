<script>
	import Head from '$components/layout/head.svelte';
	import Header from '$components/layout/header.svelte';
	import Footer from '$components/layout/footer.svelte';
	import '$styles/reset.css';
	import '$styles/root.css';
	import '$styles/typography.css';
	import '../app.css';
</script>

<Head />

<div class="min-h-screen grid grid-rows-[auto_1fr_auto]">
	<Header />
	<main class="max-w-5xl mx-auto p-4">
		<slot />
	</main>
	<Footer />
</div>

<style lang="postcss">
	:global(body) {
		@apply bg-primary text-white;
	}
</style>
