import { client } from "@rbxts/charm-sync";
import { remotes } from "shared/remotes";

import { atoms } from "./atoms";

const syncer = client({ atoms });

remotes.sync.connect((payload) => {
	syncer.sync(payload);
});

remotes.init();
