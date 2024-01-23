<script>
	import EventCard from '$components/EventCard.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	const { data: eventData } = data;
</script>

<h2 class="mb-6 inline-block font-heading font-black text-3xl ">Upcoming Events</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8  mb-12">
	{#each eventData.data.events.slice(1) as evt}
		<EventCard event={evt} />
	{/each}
</div>
