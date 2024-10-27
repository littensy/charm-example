import { SyncPayload } from "@rbxts/charm-sync";
import { Client, createRemotes, remote, Server } from "@rbxts/remo";
import { GlobalAtoms } from "shared/store/sync/atoms";

export const remotes = createRemotes({
	sync: remote<Client, [payload: SyncPayload<GlobalAtoms>]>(),
	init: remote<Server>(),
	tap: remote<Server>(),
});
