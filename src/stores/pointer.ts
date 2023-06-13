import { writable } from 'svelte/store';
import { browser } from '$app/environment';

let localPointer;
if (browser) {
	localPointer = localStorage.pointer;
}

export const pointer = writable<number>(localPointer || 0);
pointer.subscribe((value) => {
	if (browser) {
		localStorage.pointer = String(value);
	}
});
