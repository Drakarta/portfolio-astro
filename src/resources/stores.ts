import { atom } from "nanostores";

export const nameActive = atom(false);
export const firstActive = atom(false);

export function updateNameActive(value: boolean) {
	nameActive.set(value);
}

export function updateFirstActive() {
	firstActive.set(true);
}
