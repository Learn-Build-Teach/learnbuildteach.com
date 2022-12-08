<form on:submit|preventDefault>
  <slot />
</form>

<style>
	form {
    width: 100%;
    max-width: 400px;
		display: flex;
		flex-direction: column;
		gap: var(--gap-6);
    justify-self: center;
	}
</style>
