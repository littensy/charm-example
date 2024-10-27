import { atom } from "@rbxts/charm";

export interface PlayerData {
	readonly money: number;
}

type PlayerDataMap = {
	readonly [K in string]?: PlayerData;
};

export const datastore = {
	players: atom<PlayerDataMap>({}),
};

export function getPlayerData(id: string) {
	return datastore.players()[id];
}

export function setPlayerData(id: string, playerData: PlayerData) {
	datastore.players((state) => ({
		...state,
		[id]: playerData,
	}));
}

export function deletePlayerData(id: string) {
	datastore.players((state) => ({
		...state,
		[id]: undefined,
	}));
}

export function updatePlayerData(id: string, updater: (data: PlayerData) => PlayerData) {
	datastore.players((state) => ({
		...state,
		[id]: state[id] && updater(state[id]),
	}));
}
