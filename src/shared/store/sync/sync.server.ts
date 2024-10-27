import { server } from "@rbxts/charm-sync";
import { remotes } from "shared/remotes";

import { atoms } from "./atoms";
import { filterPayload } from "./utils/filter-payload";

const syncer = server({ atoms });

syncer.connect((player, payload) => {
	remotes.sync(player, filterPayload(player, payload));
});

remotes.init.connect((player) => {
	syncer.hydrate(player);
});
