import Vide, { mount } from "@rbxts/vide";
import { Button } from "client/components/button";
import { px } from "client/composables/use-px";

export = (target: Instance) => {
	return mount(() => {
		return (
			<Button
				text="Hello, world!"
				anchor={new Vector2(0.5, 0.5)}
				position={new UDim2(0.5, 0, 0.5, 0)}
				size={() => new UDim2(0, px(200), 0, px(80))}
			/>
		);
	}, target);
};
