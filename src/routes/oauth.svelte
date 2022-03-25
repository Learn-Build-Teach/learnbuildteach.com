<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	const code = $page.url.searchParams.get('code');
	const tokenKey = import.meta.env.VITE_DISCORD_TOKEN_KEY;
	onMount(async () => {
		try {
			let res = await fetch('/api/tokens', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ code })
			});
			if (res.ok) {
				let json = await res.json();
				localStorage.setItem(tokenKey, json.access_token);
			} else {
				// TODO: Handle this
				console.log("We didn't get a token for some odd reason :)");
			}
			goto('/');
		} catch (err) {
			console.error(err);
			goto('/');
		}
	});
</script>

<article>Loading...</article>
