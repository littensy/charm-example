import { AtomMap, SyncPayload } from "@rbxts/charm";
import { Client, createRemotes, remote, Server } from "@rbxts/remo";

export const remotes = createRemotes({
	sync: remote<Client, [payload: SyncPayload<AtomMap>]>(),
	init: remote<Server>(),
	tap: remote<Server>(),
});
