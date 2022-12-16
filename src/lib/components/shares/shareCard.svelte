<script lang="ts">
	import { getCoverPublicURL } from '$stores/sharesStore';

	export let share: any;
	const backupImageUrl = getCoverPublicURL('lbt-banner.jpeg');

	const imageURLFromStorage = share.storageBucketPath && getCoverPublicURL(share.storageBucketPath);
	console.log(imageURLFromStorage);
</script>

<div class="share-card">
	<img
		class="card-image"
		src={imageURLFromStorage || share.imageUrl || backupImageUrl}
		alt={share.description}
	/>
	<div class="card-body">
		<p>
			{new Date(share.createdAt).toLocaleDateString('en-us', {
				weekday: 'long',
				year: 'numeric',
				month: 'short',
				day: 'numeric'
			})}
		</p>
		<a target="_blank" rel="noreferrer" href={share.link}>
			<h2>
				{share.title}
			</h2>
		</a>
		<p>by {share?.user?.username}</p>
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
	}
	.card-body {
		padding: var(--gap-6);
	}
</style>
