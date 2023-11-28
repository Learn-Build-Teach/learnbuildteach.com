<script lang="ts">
	import { alertMessage } from '$stores/alertStore';
	import { fly } from 'svelte/transition';
</script>

<div class="alert-container">
	{#if $alertMessage}
		<div class="alert bg-primary-dark text-white rounded py-2 px-5 min-h-[30px]" in:fly={{ x: -16, duration: 150 }}>
			<p>{$alertMessage}</p>
		</div>
	{/if}
</div>

<style>
	.alert {
		font-size: clamp(var(--text-base), 1rem + 1vw, var(--text-text-lg));
		min-height: 30px;
		font-size: 18px;
	}
	.alert-container {
		height: 46px;
		margin-bottom: 20px;
	}
</style>
