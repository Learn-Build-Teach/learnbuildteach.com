<script lang="ts">
	import { goto } from '$app/navigation';
	import { loggedIn } from '$stores/authStore';
	import { loadAdminShares } from '$stores/sharesStore';
	import { onMount } from 'svelte';
	onMount(async () => {
		if (!$loggedIn) {
			return goto('/');
		}
		loadAdminShares();
	});
</script>

<slot />
