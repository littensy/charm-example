import Vide from "@rbxts/vide";
import { useMoney } from "client/composables/use-money";
import { px } from "client/composables/use-px";

export function Money() {
	const money = useMoney();

	return (
		<textbutton
			Text={() => `$${money()}`}
			TextSize={() => px(32)}
			AnchorPoint={new Vector2(1, 1)}
			Position={() => new UDim2(1, -px(20), 1, -px(20))}
			Size={() => new UDim2(0, px(200), 0, px(80))}
		>
			<uicorner CornerRadius={() => new UDim(0, px(20))} />
		</textbutton>
	);
}
