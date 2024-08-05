import { effect, observe } from "@rbxts/charm";
import { Players } from "@rbxts/services";
import { datastore, getPlayerData } from "shared/store/datastore";

observe(datastore.players, (_, name) => {
	const player = Players.FindFirstChild(name);

	if (!player) {
		return;
	}

	const leaderstats = new Instance("Folder");

	leaderstats.Name = "leaderstats";
	leaderstats.Parent = player;

	const money = new Instance("IntValue");

	money.Name = "💸 Money";
	money.Parent = leaderstats;

	const unsubscribe = effect(() => {
		money.Value = getPlayerData(name)?.money ?? 0;
	});

	return unsubscribe;
});
