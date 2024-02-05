import { writable } from 'svelte/store';

export const totalServerMembers = writable(0);
export const currentOnlineMembers = writable(0);

export const loadDiscordMemberInsights = async () => {
	const response = await fetch(
		'https://learn-build-teach-discord-bot.herokuapp.com/api/server-insights'
	);
	if (!response.ok) return console.error('Failed to fetch discord data');
	const {
		data: { totalMembers, onlineMembers }
	} = await response.json();

	totalServerMembers.set(totalMembers);
	currentOnlineMembers.set(onlineMembers);
};
