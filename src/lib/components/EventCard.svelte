<script lang="ts">
	import type { Event } from '$types/events';
	import { formatDate, formatTime } from '$lib/helpers/format-date';
	const fallbackUrl = '/images/discord-event-fallback.png';
	export let event: Event;
</script>

<div class="justify-between h-auto md:h-[230px] flex flex-col mt-12 opacity-90 hover:opacity-100">
	<a href={event.url}>
		<img
			class="w-[400px] h-[160px] border-primary-dark/50 border rounded-2xl object-cover"
			src={event.coverImageURL || fallbackUrl}
			alt={event.description}
		/>
		<h2
			class="text-slate-200 md:text-[22px] max-w-[370px] text-lg font-semibold leading-[23px] mt-4"
		>
			{event.name}
		</h2>
	</a>
	<span class="text-slate-300 md:text-sm text-[11px] font-normal mt-2">
		<span class="text-secondary">
			{formatTime(event.scheduledStartTimestamp)}
			{#if event.scheduledEndTimestamp}
				- {formatTime(event.scheduledEndTimestamp)}
			{/if}
		</span>
		<span>
			@ {formatDate(event.scheduledStartTimestamp)}
		</span>
	</span>
</div>
