<script lang="ts">
	export let share: any;
	const backupImageUrl = '/images/logo-square-512x512.png';
</script>

<div
	class="bg-primary-dark shadow-xl border-2 border-white/80 rounded-lg overflow-hidden w-[300px]"
>
	<img
		class="h-[200px] w-full object-cover border-red"
		src={share.imageUrl || backupImageUrl}
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
			<h2 class="text-2xl leading-7 mt-4 mb-2 font-heading">
				{share.title}
			</h2>
		</a>
		<p>by {share?.user?.username}</p>
		<slot />
	</div>
</div>
