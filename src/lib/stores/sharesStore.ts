import { supabase } from '$lib/helpers/supabase';
import { get, writable } from 'svelte/store';

export const shares = writable<any[]>([]);

export const adminShares = writable<any[]>([]);
let adminSharesLoaded: boolean = false;

export const loadShares = async () => {
	const { data, error } = await supabase
		.from('Share')
		.select('title, description, link, createdAt, imageUrl, DiscordUser (username)')
		.order('createdAt', { ascending: false });
	if (error) {
		throw new Error('failed to load shares');
	}
	shares.set(data);
	return data;
};

export const loadAdminShares = async () => {
	if (adminSharesLoaded) {
		return get(adminShares);
	}
	console.log('Loading admin shares');
	const { data, error } = await supabase
		.from('Share')
		.select(
			`id, title, description, link,
    tweeted, emailed, tweetable, emailable, userId, createdAt, imageUrl,
    DiscordUser (username)`
		)
		.order('createdAt', { ascending: false });
	if (error) {
		throw new Error('Failed to load admin shares');
	}
	adminShares.set(data);
	adminSharesLoaded = true;
	console.log(data);
	return data;
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
		console.log(newContent);
		return newContent;
	});
};

loadShares();
