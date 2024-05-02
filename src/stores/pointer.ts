import { writable } from 'svelte/store';
import { browser } from '$app/environment';

let localPointer;
let localPointerPuzzle;
let localPointerGridGround;

if (browser) {
	localPointer = localStorage.pointer;
	localPointerPuzzle = localStorage.pointerPuzzle;
	localPointerGridGround = localStorage.pointerGridGround;
}

export const pointer = writable<number>(localPointer || 0);
export const pointerPuzzle = writable<number>(localPointerPuzzle || 0);
export const pointerGridGround = writable<number>(localPointerGridGround || 0);

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
pointerGridGround.subscribe((value) => {
	if (browser) {
		localStorage.pointerGridGround = String(value);
	}
});
