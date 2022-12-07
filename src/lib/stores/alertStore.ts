import { writable } from 'svelte/store';

export const alertMessage = writable('');

export const updateAlert = (message: string) => {
	alertMessage.set(message);
};
