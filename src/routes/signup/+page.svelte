<script lang="ts">
	import { supabase } from '$lib/helpers/supabase';
	// import { PUBLIC_APP_DOMAIN } from '$env/static/public';
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
				emailRedirectTo: `/admin`
			}
		});
		if (error) {
			updateAlert('Failed to sign up.');
		} else {
			updateAlert('Check your email');
		}
	};
</script>

<h1 class="text-4xl font-black mb-4 text-center font-heading">Sign up</h1>
<Form on:submit={handleSignUp}>
	<div class="flex flex-col">
		<label for="email">Email</label>
		<input
			type="email"
			name="email"
			id="email"
			bind:value={email}
			class="bg-white border-2 border-gray-200 text-black outline-none p-2 rounded focus:border-secondary"
		/>
	</div>

	<div class="flex flex-col">
		<label for="password">Password</label>
		<input
			type="password"
			name="password"
			id="password"
			bind:value={password}
			class="bg-white border-2 border-gray-200 text-black outline-none p-2 rounded focus:border-secondary"
		/>
	</div>

	<div class="flex flex-col">
		<label for="verify">Verify Password</label>
		<input
			type="password"
			name="verify"
			id="verify"
			bind:value={verifyPassword}
			class="bg-white border-2 border-gray-200 text-black outline-none p-2 rounded focus:border-secondary"
		/>
	</div>

	<button class="bg-white rounded text-primary py-2 px-4 font-bold">Sign up</button>
	<small>
		Already have an account?
		<a class="border-b border-secondary font-bold" href="/login">Log in</a>
	</small>

	<Alert />
</Form>
