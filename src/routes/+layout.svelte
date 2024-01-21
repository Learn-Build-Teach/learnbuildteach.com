<script>
	import Head from '$components/layout/head.svelte';
	import Header from '$components/layout/header.svelte';
	import Footer from '$components/layout/footer.svelte';
	import '../app.css';
</script>

<Head />

<div class="min-h-screen bg-primary-dark text-white">
	<Header />
	<main class="w-full max-w-5xl mx-auto p-4">
		<slot />
	</main>
	<Footer />
</div>
