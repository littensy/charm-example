import { remotes } from "shared/remotes";
import { updatePlayerData } from "shared/store/datastore";

remotes.tap.connect((player) => {
	updatePlayerData(player.Name, (data) => ({
		...data,
		money: data.money + 1,
	}));
});
