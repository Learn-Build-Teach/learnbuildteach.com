import { supabase } from '$lib/helpers/supabase';
import { writable } from 'svelte/store';

export const loggedIn = writable(false);

supabase.auth.onAuthStateChange((event, session) => {
	loggedIn.set(!!session);
});

const updateLoggedIn = async () => {
	const { data } = await supabase.auth.getSession();
	loggedIn.set(!!data?.session);
};

updateLoggedIn();
