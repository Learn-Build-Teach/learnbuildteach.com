import Grid from '$lib/components/storyblok/Grid.svelte';
import EventCard from '$lib/components/storyblok/EventCard.svelte';
import Page from '$lib/components/storyblok/Page.svelte';
import Teaser from '$lib/components/storyblok/Teaser.svelte';
import PinnedEvent from '$lib/components/storyblok/PinnedEvent.svelte';
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
    storyblokInit({
        accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
        use: [apiPlugin],
        components: {
            'pinned-events': PinnedEvent,
            event: EventCard,
            grid: Grid,
            page: Page,
            teaser: Teaser
        },
        apiOptions: {
            region: 'us'
        }
    });
    let storyblokApi = useStoryblokApi();

    return {
        storyblokApi: storyblokApi
    };
}
