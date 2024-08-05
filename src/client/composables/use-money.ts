import { Players } from "@rbxts/services";
import { getPlayerData } from "shared/store/datastore";

import { useAtom } from "./use-atom";

export function useMoney() {
	return useAtom(() => {
		const data = getPlayerData(Players.LocalPlayer.Name);
		return data ? data.money : 0;
	});
}
