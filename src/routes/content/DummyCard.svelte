<script>
	const dateString = new Date().toLocaleDateString('en-us', {
		weekday: 'long',
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
</script>

<div class="share-card">
	<img class="card-image" alt="Share description" />
	<div class="card-body">
		<p>{dateString}</p>
		<a target="_blank" rel="noreferrer" href="about:blank">
			<h2>Lorem ipsum dolor sit amet</h2>
		</a>
		<p>by Lorem Ipsum</p>
		<slot />
	</div>
</div>

<style>
	.share-card {
		background: var(--primary-dark);
		border-radius: var(--gap-2);
		overflow: hidden;
		width: 300px;
	}
	.card-image {
		height: 200px;
		width: 100%;
		object-fit: cover;
        background: #457b9d;
	}
	.card-body {
		padding: var(--gap-6);
	}
</style>
