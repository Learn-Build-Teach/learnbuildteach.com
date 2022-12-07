<script lang="ts">
	import { goto } from '$app/navigation';
	import Alert from '$components/alert.svelte';
	import { supabase } from '$lib/helpers/supabase';
	import { alertMessage, updateAlert } from '$stores/alertStore';

	let email = '';
	let password = '';
	const signIn = async () => {
		console.log(email);
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});
		if (error) {
			console.error(error);
			updateAlert('Failed to login');
		} else {
			alertMessage.set('');
			goto('/admin');
		}
	};
</script>

<Alert />
<form on:submit|preventDefault={signIn}>
	<label for="email">Email</label>
	<input type="email" name="email" id="email" bind:value={email} />
	<label for="password">Password</label>
	<input type="password" name="password" id="password" bind:value={password} />
	<button>Sign In</button>
</form>
