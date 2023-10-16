import { supabase } from '$lib/helpers/supabase';
import { writable } from 'svelte/store';

export const loggedIn = writable(false);

if (supabase) {
    supabase.auth.onAuthStateChange((event, session) => {
        loggedIn.set(!!session);
    });
}

const updateLoggedIn = async () => {
    if (supabase) {
        const { data } = await supabase.auth.getSession();
        loggedIn.set(!!data?.session);
    }
};

updateLoggedIn();
