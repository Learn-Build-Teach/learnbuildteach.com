<script lang="ts">
	import { supabase } from '$lib/helpers/supabase';
	import { PUBLIC_APP_DOMAIN } from '$env/static/public';
	import { updateAlert } from '$stores/alertStore';
	import Alert from '$components/alert.svelte';

	let email = '';
	let password = '';
	let verifyPassword = '';
	const signIn = async () => {
		if (password !== verifyPassword) {
			updateAlert('Passwords must match');
			return;
		}
		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${PUBLIC_APP_DOMAIN}/admin`
			}
		});
		if (error) {
			updateAlert('Failed to sign up.');
		} else {
			updateAlert('Check your email');
		}
	};
</script>

<Alert />
<form on:submit|preventDefault={signIn}>
	<label for="email">Email</label>
	<input type="email" name="email" id="email" bind:value={email} />
	<label for="password">Password</label>
	<input type="password" name="password" id="password" bind:value={password} />
	<label for="verify">Verify Password</label>
	<input type="password" name="verify" id="verify" bind:value={verifyPassword} />
	<button>Sign Up</button>
</form>
