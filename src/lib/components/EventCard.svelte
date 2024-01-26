<script lang="ts">
	import type { Event } from '$types/events';
	import { formatDate, formatTime } from '$lib/helpers/format-date';
	const fallbackUrl = '/images/lbt_cover.png';
	export let event: Event;
</script>

<div class="w-full rounded-lg flex flex-col justify-between">
	<img
		src={event.coverImageURL || fallbackUrl}
		alt={event.name}
		class="aspect-square object-cover border rounded-lg border-primary-dark/30"
	/>

	<div class="mt-auto">
		<a href={event.url} rel="noreferrer" target="_blank" class="my-4 block">
			<h2 class="text-2xl font-heading ">
				{event.name}
			</h2>
		</a>

		<div>
			<span>
				{formatTime(event.scheduledStartTimestamp)}
				{#if event.scheduledEndTimestamp}
					- {formatTime(event.scheduledEndTimestamp)}
				{/if}
			</span>
			<span>
				@ {formatDate(event.scheduledStartTimestamp)}
			</span>
		</div>
	</div>
</div>
