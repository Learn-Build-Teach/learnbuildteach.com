<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	const code = $page.url.searchParams.get('code');

	async function processAuthCode() {
		let res = await fetch('/api/tokens', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ code })
		});
		if (res.ok) {
			let json = await res.json();
			localStorage.setItem('token', json.access_token);
		} else {
			// TODO: Handle this
			console.log("We didn't get a token for some odd reason :)");
		}
		goto('/');
	}
	processAuthCode();
</script>

<article>Loading...</article>
