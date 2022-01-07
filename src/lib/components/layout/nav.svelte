<script>
	import { page } from '$app/stores';
    $: path = $page.url.pathname;
</script>

<nav>
	<ul>
		<li>
			<a class={path === '/' ? 'page' : 'selected'} sveltekit:prefetch href="/"> Home </a>
		</li>
		<li>
			<a class={path === '/content' ? 'page' : 'selected'} sveltekit:prefetch href="/content">
				Content
			</a>
		</li>
		<li>
			<a class={path === '/talks' ? 'page' : 'selected'} sveltekit:prefetch href="/talks">
				Talks
			</a>
		</li>
		<li>
			<a class={path === '/code-of-conduct' ? 'page' : 'selected'} sveltekit:prefetch href="/code-of-conduct">
				Code of Conduct
			</a>
		</li>
		<!-- <li>
			<a class={$page.path === '/streams' ? 'page' : 'selected'} sveltekit:prefetch href="/streams">
				Streams
			</a>
		</li> -->
	</ul>
</nav>

<style>
	ul {
		padding: 0;
		display: grid;
		gap: var(--gap-2);
		color: var(--white);
		font-family: var(--font-heading);
		font-size: var(--text-xxl);
    	list-style: none;

	}

	a {
		color: var(--white);
		text-decoration: none;
		display: block;
		position: relative;
        border: none;
	}
	.page {
		color: var(--secondary);
	}
	a:hover {
		color: var(--secondary);
        border: none;
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

	@media (min-width: 1024px) {
		ul {
			display: flex;
			align-items: center;
			gap: var(--gap-5);
		}
		a::before {
			content: '';
			position: absolute;
			transition: all 0.3s ease;
			left: 12%;
			top: 100%;
			/* top: 80%; */
			width: 75%;
			height: 4px;
			background: var(--white);
			transform: scaleX(0);
		}
		.page {
			color: var(--white);
		}
	}
</style>
