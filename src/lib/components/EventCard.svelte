<script lang="ts">
	import { formatDate, formatTime } from '../helpers/format-date';
	import type { Event } from '$types/events';
	export let event: Event;
	const fallbackUrl = '/images/lbt_cover.png';
</script>

<div class={`w-full rounded-lg overflow-hidden gap-4 `}>
	<img
		src={event.image || fallbackUrl}
		alt={event.name}
		class="aspect-video object-cover border rounded-lg border-primary-dark/30"
	/>
	<div class="flex flex-col gap-2 mt-4">
		<h2 class="text-2xl leading-relaxed font-heading">
			{event.name}
		</h2>
		<p class="text-gray-400 line-clamp-2">{event.description}</p>

		<div class="text-sm max-w-max flex items-center   rounded-md  ">
			<span class="font-semibold">
				{formatTime(event.scheduledStartTimestamp)}
				{#if event.scheduledEndTimestamp}
					- {formatTime(event.scheduledEndTimestamp)}
				{/if}
			</span>
			<span class="font-semibold ml-2">
				@ {formatDate(event.scheduledStartTimestamp)}
			</span>
		</div>
		<a
			href={event.url}
			target="_blank"
			rel="noreferrer noopener"
			class=" bg-white max-w-max border-none py-2 px-4 rounded-lg text-primary hover:bg-accent transition-500 mt-4"
		>
			Join in Discord
		</a>
	</div>
</div>
