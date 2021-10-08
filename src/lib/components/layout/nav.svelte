<script>
	import { page } from '$app/stores';
	let selected;
</script>

<nav>
	<ul>
		<li>
			<a class={$page.path === '/' ? 'page' : 'selected'} sveltekit:prefetch href="/">Home</a>
		</li>
		<li>
			<a class={$page.path === '/content' ? 'page' : ''} sveltekit:prefetch href="/content"
				>Content</a
			>
		</li>
		<li>
			<a class={$page.path === '/talks' ? 'page' : 'selected'} sveltekit:prefetch href="/talks"
				>Talks</a
			>
		</li>
	</ul>
</nav>

<style>
	ul {
		display: flex;
		align-items: center;
		gap: var(--gap-7);
		color: var(--white);
		font-family: var(--font-heading);
		font-size: var(--text-xxl);
	}

	a {
		color: var(--white);
		text-decoration: none;
		padding: 1rem;
		display: block;
		position: relative;
	}
	a::before {
		content: '';
		position: absolute;
		transition: all 0.3s ease;
		left: 12%;
		bottom: 0;
		top: 50%;
		width: 75%;
		height: 4px;
		background: var(--white);
		transform: scaleX(0);
	}
	a:hover {
		color: var(--secondary);
	}

	.selected:hover {
		color: var(--secondary);
	}
	a:hover::before,
	.page::before {
		transform: scaleX(1);
	}
	.page::before {
		background: var(--secondary);
	}
</style>
