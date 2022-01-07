<script>
	import { page } from '$app/stores';
	const capitalize = (str, lower = false) =>
		(lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
			match.toUpperCase()
		);
	const img = '/images/logo-square-192x192.png';
	const desc = 'The goal of this community is to provide a safe place for developers to learn, build, and teach!';
    
	$: title =
		$page.url.pathname === '/' || $page.url.pathname.includes('//prerender/')
			? 'Learn Build Teach'
			: `${capitalize(
					$page.url.pathname.substring(1).replace('s/', ' | ').replace(/-/g, ' ')
			  )} | Learn Build Teach`;
</script>

<svelte:head>
	<meta name="description" content={desc} />
	<meta name="title" content={title} />
	<link rel="manifest" href="/manifest.json" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`https://www.learnbuildteach.com${$page.url.pathname}`} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:image" content={img} />
	<meta property="og:image:alt" content="Learn Build Teach" />
	<meta property="og:image:width" content="512" />
	<meta property="og:image:height" content="512" />
	<!-- Twitter -->
	<meta property="twitter:card" content="summary" />
	<meta property="twitter:url" content="https://twitter.com/SvelteSirens" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={desc} />
	<meta property="twitter:image" content={img} />
	<meta name="twitter:image:alt" content="Learn Build Teach" />
	<link rel="icon" type="image/png" href="/images/favicon.png" />
	
	<title>{title}</title>
</svelte:head>