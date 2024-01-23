<script lang="ts">
	import { formatDate, formatTime } from '$src/lib/helpers/format-date';
	import EventCard from '$components/EventCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const { data: eventData } = data;
	$: upcoming = eventData.data.events[0];
</script>

<h1 class="mb-4 font-heading font-black text-4xl ">Next Events</h1>
<div
	class="flex flex-col justify-end py-12 border p-4 rounded-xl  mb-12
        relative min-h-[400px] border-primary-dark/20 "
>
	<img
		src={upcoming.image || '/images/lbt_cover.png'}
		class="-z-10 w-full rounded-xl top-0 h-full left-0 absolute object-cover "
		alt={upcoming.name}
	/>
	<div
		class="w-full -z-[8] backdrop-blur-sm h-full absolute top-0 left-0 rounded-xl bg-gradient-to-tr from-primary-dark/80"
	/>
	<div class="px-4 md:px-8 z-0">
		<h1 class="font-heading font-black text-3xl leading-relaxed lg:text-5xl mb-4 text-white">
			{upcoming.name}
		</h1>
		<p class="mb-4 text-gray-200 text-lg mt-2 ">{upcoming.description}</p>

		<div class="text-lg flex items-center">
			<span class="font-semibold">
				{formatTime(upcoming.scheduledStartTimestamp)}
				{#if upcoming.scheduledEndTimestamp}
					- {formatTime(upcoming.scheduledEndTimestamp)}
				{/if}
			</span>
			<span class="font-semibold ml-2">
				@ {formatDate(upcoming.scheduledStartTimestamp)}
			</span>
		</div>
		<a
			href={upcoming.url}
			target="_blank"
			rel="noreferrer noopener"
			class="text-lg mt-6 bg-secondary text-white border-none block max-w-max py-2 px-4 mb-4 rounded-lg hover:bg-secondary/90 transition-500 backdrop-filter backdrop-blur-lg"
		>
			Join in Discord
		</a>
	</div>
</div>

<h2 class="mb-4 inline-block font-heading font-black text-3xl ">Upcoming Events</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8  mb-12">
	{#each eventData.data.events.slice(1) as evt}
		<EventCard event={evt} />
	{/each}
</div>
