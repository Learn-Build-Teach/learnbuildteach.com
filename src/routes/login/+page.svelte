<script lang="ts">
	import { goto } from '$app/navigation';
	import Alert from '$components/alert.svelte';
	import { supabase } from '$lib/helpers/supabase';
	import { alertMessage, updateAlert } from '$stores/alertStore';
	import Form from '$components/layout/form.svelte';
	import { onDestroy } from 'svelte';

	let email = '';
	let password = '';

	onDestroy(() => {
		updateAlert('');
	});

	const handleLogIn = async () => {
		if (!email || !password) {
			return updateAlert('Email and password are required.');
		}
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});
		if (error) {
			console.error(error);
			updateAlert('Failed to login');
		} else {
			goto('/admin');
		}
	};

	const handleSendMagicLink = async () => {
		if (!email) {
			return updateAlert('Email is required for magic links');
		}

		const { error } = await supabase.auth.signInWithOtp({ email });
		if (error) {
			console.error(error);
			updateAlert('Failed to send magic link');
		} else {
			updateAlert('Please check your email');
		}
	};
</script>

<h1 class="text-4xl font-black mb-4 text-center font-heading">Log in</h1>
<Form on:submit={handleLogIn}>
	<div class="flex flex-col">
		<label for="email">Email</label>
		<input
			type="email"
			name="email"
			id="email"
			bind:value={email}
			class="bg-white border border-gray-200 text-black outline-none p-2 rounded"
		/>
	</div>

	<div class="flex flex-col">
		<label for="password">Password</label>
		<input
			type="password"
			name="password"
			id="password"
			bind:value={password}
			class="bg-white border border-gray-200 text-black outline-none p-2 rounded"
		/>
	</div>

	<button class="bg-white rounded text-primary py-2 px-4 font-bold">Log in</button>
	<button
		class="bg-white rounded text-primary py-2 px-4 font-bold"
		type="button"
		on:click={handleSendMagicLink}><small>Send magic link</small></button
	>
	<small>
		Don't have an account yet?
		<a href="/signup" class="border-b border-secondary font-bold">Sign up</a>
	</small>

	<Alert />
</Form>
