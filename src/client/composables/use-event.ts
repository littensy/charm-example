import { cleanup } from "@rbxts/vide";

/**
 * Connects a callback to an event and disconnects it when the component is unmounted.
 *
 * @param event The event to connect to.
 * @param callback The callback to connect.
 */
export function useEvent<T extends Callback>(event: RBXScriptSignal<T>, callback: T) {
	const connection = event.Connect(callback);
	cleanup(connection);
	return connection;
}
