<script lang="ts">
	import { getCoverPublicURL } from '$stores/sharesStore';

	export let share: any;
	const backupImageUrl = getCoverPublicURL('lbt-banner.jpeg');

	const imageURLFromStorage = share.storageBucketPath && getCoverPublicURL(share.storageBucketPath);
</script>

<div class="bg-primary-dark rounded-lg overflow-hidden w-[300px]">
	<img
		class="h-[200px] w-full object-cover"
		src={imageURLFromStorage || share.imageUrl || backupImageUrl}
		alt={share.description}
	/>
	<div class="p-8">
		<p>
			{new Date(share.createdAt).toLocaleDateString('en-us', {
				weekday: 'long',
				year: 'numeric',
				month: 'short',
				day: 'numeric'
			})}
		</p>
		<a target="_blank" rel="noreferrer" href={share.link}>
			<h2 class="text-2xl leading-7 mt-4 mb-2">
				{share.title}
			</h2>
		</a>
		<p>by {share?.user?.username}</p>
		<slot />
	</div>
</div>
