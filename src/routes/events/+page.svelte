<script>
	import EventCard from '$components/EventCard.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	const { data: eventData } = data;
</script>

<h2 class="mb-6 inline-block font-heading font-black text-3xl ">Upcoming Events</h2>
{#if eventData.data.events.length === 0 || eventData.err}
	<h2 class="text-2xl leading-relaxed mt-4 ">No upcoming events at this time.</h2>
	<p class="mt-4 text-lg">Have an activity in mind ?</p>

	<a
		href="https://discord.gg/vM2bagU"
		target="_blank"
		rel="noreferrer noopener"
		class="mt-4 block max-w-max bg-white border-none py-2 px-4 rounded-lg text-primary hover:bg-accent transition-500"
	>
		Join the Discord !
	</a>
{:else}
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8  mb-12">
		{#each eventData.data.events.reverse() as evt}
			<EventCard event={evt} />
		{/each}
	</div>
{/if}
