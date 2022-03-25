<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	const code = $page.url.searchParams.get('code');
	onMount(async () => {
		try {
			await fetch('/api/tokens', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ code })
			});
			goto('/');
		} catch (err) {
			console.error(err);
			goto('/');
		}
	});
</script>

<article>Loading...</article>
