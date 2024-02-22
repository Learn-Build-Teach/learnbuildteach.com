import type { EventAPIResponse } from '$types/events';

/** @type {import('./$types').PageLoad} */
export async function load() {
    const data: EventAPIResponse = await fetch(
        'https://learn-build-teach-discord-bot.herokuapp.com/api/events'
    ).then((res) => res.json());

    return {
        data
    };
}
