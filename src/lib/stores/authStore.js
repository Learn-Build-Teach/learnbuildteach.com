import { writable } from "svelte/store";

export const isLoggedIn = writable(false);
export const userToken = writable(null);
const tokenKey = import.meta.env.VITE_DISCORD_TOKEN_KEY;

export const loadUser = () => {
  const token = localStorage.getItem(tokenKey);
  userToken.set(token)
  isLoggedIn.set(!!token)
}
