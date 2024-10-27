import { effect } from "@rbxts/charm";
import { createCollection } from "@rbxts/lapis";
import { Players } from "@rbxts/services";
import { t } from "@rbxts/t";
import { deletePlayerData, getPlayerData, PlayerData, setPlayerData } from "shared/store/datastore";

const defaultData: PlayerData = {
	money: 0,
};

const collection = createCollection<PlayerData>("dev-0", {
	defaultData,
	validate: t.interface({
		money: t.number,
	}),
});

function onPlayerAdded(player: Player) {
	loadPlayerData(player).catch((err) => {
		warn(`Failed to load document for player ${player.Name}: ${err}`);
		setPlayerData(player.Name, defaultData);
	});
}

function onPlayerRemoving(player: Player) {
	deletePlayerData(player.Name);
}

async function loadPlayerData(player: Player) {
	const document = await collection.load(`${player.UserId}`, [player.UserId]);

	if (!player.IsDescendantOf(Players)) {
		document.close();
		return;
	}

	const unsubscribe = effect(() => {
		const data = getPlayerData(player.Name);

		if (data) {
			document.write(data);
		}
	});

	setPlayerData(player.Name, document.read());

	Promise.fromEvent(Players.PlayerRemoving, (left) => player === left)
		.then(() => unsubscribe())
		.then(() => document.close());
}

Players.PlayerAdded.Connect(onPlayerAdded);
Players.PlayerRemoving.Connect(onPlayerRemoving);

for (const player of Players.GetPlayers()) {
	onPlayerAdded(player);
}
