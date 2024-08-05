import { Molecule, subscribe } from "@rbxts/charm";
import { cleanup, source } from "@rbxts/vide";

/**
 * Subscribes to the state of an atom and returns a Vide source.
 *
 * @param callback The atom to subscribe to.
 * @returns The reactive source.
 */
export function useAtom<T>(callback: Molecule<T>) {
	const state = source(callback());
	const disconnect = subscribe(callback, state);

	cleanup(disconnect);

	return state;
}
