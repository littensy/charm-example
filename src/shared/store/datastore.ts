import { atom } from "@rbxts/charm";
import Remap from "@rbxts/remap";

export interface PlayerData {
	readonly money: number;
}

export const datastore = {
	players: atom(new ReadonlyMap<string, PlayerData>()),
};

export function getPlayerData(id: string) {
	return datastore.players().get(id);
}

export function setPlayerData(id: string, playerData: PlayerData) {
	datastore.players((state) => Remap.set(state, id, playerData));
}

export function deletePlayerData(id: string) {
	datastore.players((state) => Remap.delete(state, id));
}

export function updatePlayerData(id: string, updater: (data: PlayerData) => PlayerData) {
	datastore.players((state) => Remap.change(state, id, updater));
}
