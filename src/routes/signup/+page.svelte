<script lang="ts">
	import { supabase } from '$lib/helpers/supabase';
	import { PUBLIC_APP_DOMAIN } from '$env/static/public';
	import { updateAlert } from '$stores/alertStore';
	import Alert from '$components/alert.svelte';
  import Auth from '$components/layout/auth.svelte';

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

<Auth on:submit={signIn}>
  <h1>Sign up</h1>

	<div>
		<label for="email">Email</label>
		<input type="email" name="email" id="email" bind:value={email} />
	</div>

	<div>
		<label for="password">Password</label>
		<input type="password" name="password" id="password" bind:value={password} />
	</div>

	<div>
		<label for="verify">Verify Password</label>
		<input type="password" name="verify" id="verify" bind:value={verifyPassword} />
	</div>

	<div />

	<button>Sign Up</button>

  <Alert />
</Auth>
