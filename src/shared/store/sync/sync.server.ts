import { sync } from "@rbxts/charm";
import { remotes } from "shared/remotes";

import { atoms } from "./atoms";

const server = sync.server({ atoms });

server.connect((player, payload) => {
	remotes.sync(player, payload);
});

remotes.init.connect((player) => {
	server.hydrate(player);
});
