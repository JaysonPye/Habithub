import { writable } from "svelte/store";

export const jwt = writable("");
export const loggedIn = writable(false);
export const userFirstName = writable("");
export const darkTheme = writable(false)

// jwt.subscribe((value) => localStorage.setItem('jwt', value))
// loggedIn.subscribe((value) => localStorage.setItem('loggedIn', value))
// userFirstName.subscribe((value) => localStorage.setItem('userID', value))
