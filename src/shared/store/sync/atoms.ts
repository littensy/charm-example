import { AtomMap } from "@rbxts/charm";

import { datastore } from "../datastore";

/**
 * Assigns unique prefixes to each atom and flattens them into a single map.
 * Should be passed to Charm's Sync API.
 *
 * @param maps The maps of atoms to flatten.
 * @returns The flattened map of atoms.
 */
function flattenAtoms(maps: { [prefix: string]: AtomMap }): AtomMap {
	const flattened: AtomMap = {};

	for (const [prefix, map] of pairs(maps)) {
		for (const [key, atom] of pairs(map)) {
			flattened[`${prefix}.${key}`] = atom;
		}
	}

	return flattened;
}

export const atoms = flattenAtoms({
	datastore,
});
