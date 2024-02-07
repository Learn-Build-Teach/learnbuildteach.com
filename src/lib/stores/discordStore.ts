import { writable } from 'svelte/store';

export const totalServerMembers = writable(null);
export const currentOnlineMembers = writable(null);

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
