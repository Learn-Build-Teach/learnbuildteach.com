import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params, parent }) {
    const { storyblokApi } = await parent();

    const url = `cdn/stories/events/${params.slug}`;

    const dataStory = await storyblokApi.get(url, {
        version: 'draft',
        resolve_relations: 'event.socials'
    });

    if (!dataStory.data) {
        error(404, {
            message: 'Content Not Found'
        });
        return;
    }

    return {
        story: dataStory.data.story
    };
}
