import { writable } from 'svelte/store';

export const content = writable([]);

export const loadContentFromLBT = async () => {
	const res = await fetch('https://learn-build-teach-discord-bot.herokuapp.com/api/shares');
	const { data } = await res.json();
	content.set(data);
};

loadContentFromLBT();
