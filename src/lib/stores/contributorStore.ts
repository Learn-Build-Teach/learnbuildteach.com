import { writable } from 'svelte/store';

export const contributors = writable<IContributor[]>([]);

export const loadContributors = async () => {
	const response = await fetch(
		'https://api.github.com/repos/Learn-Build-Teach/learnbuildteach.com/contributors'
	);
	if (!response.ok) return console.error('Failed to fetch contributors data');

	const data = await response.json();

	contributors.set(data);
};
