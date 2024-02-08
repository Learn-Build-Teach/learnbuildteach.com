<script>
	import Head from '$components/layout/head.svelte';
	import Header from '$components/layout/header.svelte';
	import Footer from '$components/layout/footer.svelte';
	import '../app.css';
	import { isOpen } from '$stores/mobileMenuStore';
</script>

<Head />

<div class="min-h-screen bg-primary-dark text-white">
	<Header />
	<main class="max-w-6xl mx-auto px-8" on:click={() => isOpen.set(false)} on:keydown={() => null}>
		<slot />
	</main>
	<Footer />
</div>
