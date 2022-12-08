<script lang="ts">
	import { alertMessage } from '$stores/alertStore';
	import { fade } from 'svelte/transition';
</script>

<div class="alert-container">
	{#if $alertMessage}
		<div class="alert" transition:fade>
			<p>{$alertMessage}</p>
		</div>
	{/if}
</div>

<style>
	.alert {
		background: var(--secondary);
		color: var(--text);
		font-size: clamp(var(--text-base), 1rem + 1vw, var(--text-text-lg));
		border-radius: 4px;
		padding: 8px 20px;
		min-height: 30px;
		font-size: 20px;
	}
	.alert-container {
		height: 46px;
		margin-bottom: 20px;
	}
</style>
