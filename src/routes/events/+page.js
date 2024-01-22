/** @type {import('./$types').PageLoad} */

export async function load({ parent }) {
	const { storyblokApi } = await parent();

	const dataStory = await storyblokApi.get('cdn/stories/pages/events', {
		version: 'draft',
		resolve_relations: ['pinned-events.event', 'pinned-events.socials']
	});

	const { data } = await storyblokApi.get('cdn/stories', {
		version: 'draft',
		starts_with: 'events',
		is_startpage: false
	});

	return {
		story: dataStory.data.story,
		stories: data.stories
	};
}
