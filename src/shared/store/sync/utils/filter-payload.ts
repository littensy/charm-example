import { SyncPayload } from "@rbxts/charm-sync";

import { GlobalAtoms } from "../atoms";

/**
 * Filters the payload to only include the player's data.
 *
 * @param player The player to send the payload to.
 * @param payload The payload to filter.
 * @returns A new payload that only includes the player's data.
 */
export function filterPayload(player: Player, payload: SyncPayload<GlobalAtoms>) {
	if (payload.type === "init") {
		return {
			...payload,
			data: {
				...payload.data,
				"datastore/players": {
					[player.Name]: payload.data["datastore/players"][player.Name],
				},
			},
		};
	}

	return {
		...payload,
		data: {
			...payload.data,
			"datastore/players": payload.data["datastore/players"] && {
				[player.Name]: payload.data["datastore/players"][player.Name],
			},
		},
	};
}
