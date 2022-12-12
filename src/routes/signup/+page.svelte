<script lang="ts">
	import { supabase } from '$lib/helpers/supabase';
	import { PUBLIC_APP_DOMAIN } from '$env/static/public';
	import { alertMessage, updateAlert } from '$stores/alertStore';
	import Alert from '$components/alert.svelte';
	import Form from '$components/layout/form.svelte';
	import { onDestroy } from 'svelte';

	let email = '';
	let password = '';
	let verifyPassword = '';

	onDestroy(() => {
		updateAlert('');
	});

	const handleSignUp = async () => {
		if (!email || !password || !verifyPassword) {
			return updateAlert('Email and passwords are required.');
		}

		if (password !== verifyPassword) {
			return updateAlert('Passwords must match');
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

<h1>Sign up</h1>
<Form on:submit={handleSignUp}>
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

	<button>Sign up</button>
	<small>Already have an account? <a href="/login">Log in</a></small>

	<Alert />
</Form>
