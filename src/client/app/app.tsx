import Vide from "@rbxts/vide";
import { Money } from "client/components/money";
import { TapHere } from "client/components/tap-here";
import { usePx } from "client/composables/use-px";

export function App() {
	usePx();

	return (
		<screengui>
			<Money />
			<TapHere />
		</screengui>
	);
}
