import { Players } from "@rbxts/services";
import { useAtom } from "@rbxts/vide-charm";
import { getPlayerData } from "shared/store/datastore";

export function useMoney() {
	return useAtom(() => {
		const data = getPlayerData(Players.LocalPlayer.Name);
		return data ? data.money : 0;
	});
}
