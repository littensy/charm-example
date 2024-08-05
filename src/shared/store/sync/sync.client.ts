import { sync } from "@rbxts/charm";
import { remotes } from "shared/remotes";

import { atoms } from "./atoms";

const client = sync.client({ atoms });

remotes.sync.connect((payload) => {
	client.sync(payload);
});

remotes.init();
