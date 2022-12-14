import { supabase } from '$lib/helpers/supabase';
import { get, writable } from 'svelte/store';

export const shares = writable<any[]>();
let sharesLoaded = false;

export const adminShares = writable<any[]>();
let adminSharesLoaded = false;

export const loadShares = async () => {
	if (sharesLoaded) return;

	const { data, error } = await supabase
		.from('Share')
		.select(
			`id, createdAt, link, title, description, imageUrl, tweetable, discordUserId,
        user:discordUserId(username)`
		)
		.order('createdAt', { ascending: false })
		.limit(20);
	if (error) {
		return console.error('failed to load shares');
	}
	shares.set(data);
	sharesLoaded = true;
};

export const deleteShare = async (id: string) => {
	const { error } = await supabase.from('Share').delete().eq('id', id);

	if (error) {
		throw error;
	}

	adminShares.update((prevAdminShares) => {
		return prevAdminShares.filter((share) => share.id !== id);
	});

	shares.update((prevShares) => {
		return prevShares.filter((share) => share.id !== id);
	});
};

export const loadAdminShares = async () => {
	if (adminSharesLoaded) return;

	const { data, error } = await supabase
		.from('Share')
		.select(
			`id, createdAt, link, title, tweetable, emailable, tweeted, emailed, description, imageUrl, tweetable, discordUserId,
        user:discordUserId(username)`
		)
		.order('createdAt', { ascending: false })
		.limit(20);

	if (error) {
		return console.error('failed to load shares');
	}
	adminShares.set(data);
	adminSharesLoaded = true;
};

export const updateShare = async (id: string, updates: any) => {
	const { error } = await supabase.from('Share').update(updates).eq('id', id);
	if (error) {
		throw new Error('Failed to update shares');
	}
	adminShares.update((prevContent) => {
		const newContent = prevContent.map((content) => {
			if (content.id === id) {
				return { ...content, ...updates };
			}
			return content;
		});
		return newContent;
	});
};
