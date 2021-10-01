<script>
	import Nav from './nav.svelte';
</script>

<header>
	<a href="/">
		<img src="img/logo-dark-pencil.png" alt="Learn Build Teach logo" />
		Learn Build Teach
	</a>
	<Nav />
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		max-width: var(--max-width);
		margin-inline: auto;
		padding: var(--gap-2) var(--gap-4);
	}
	img {
		width: 50px;
	}
	a {
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: var(--gap-1);
		font-size: 1.5rem;
		font-family: 'Raleway', sans-serif;
	}

	@media (min-width: 1024px) {
		header {
			padding-inline: 0;
		}
	}
</style>
