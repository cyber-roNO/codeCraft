import { writable } from 'svelte/store';
import { browser } from '$app/environment';

let localPointer;
let localPointerPuzzle;

if (browser) {
	localPointer = localStorage.pointer;
	localPointerPuzzle = localStorage.pointerPuzzle;
}

export const pointer = writable<number>(localPointer || 0);
export const pointerPuzzle = writable<number>(localPointerPuzzle || 0);

pointer.subscribe((value) => {
	if (browser) {
		localStorage.pointer = String(value);
	}
});
pointerPuzzle.subscribe((value) => {
	if (browser) {
		localStorage.pointerPuzzle = String(value);
	}
});
