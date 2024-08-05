import Vide, { Derivable, source, spring } from "@rbxts/vide";
import { px } from "client/composables/use-px";

interface ButtonProps {
	onClick?: () => void;
	text?: Derivable<string>;
	anchor?: Derivable<Vector2>;
	position?: Derivable<UDim2>;
	size?: Derivable<UDim2>;
	native?: Vide.InstanceAttributes<TextButton>;
	children?: Vide.Node;
}

export function Button({ onClick, text, anchor, position, size, native, children }: ButtonProps) {
	const hovered = source(false);
	const pressed = source(false);

	const buttonSize = spring(() => {
		return hovered() && !pressed() ? new UDim2(1, px(14), 1, px(14)) : new UDim2(1, 0, 1, 0);
	}, 0.2);

	const buttonPosition = spring(() => {
		return pressed() ? new UDim2(0.5, 0, 0.5, px(10)) : new UDim2(0.5, 0, 0.5, 0);
	}, 0.25);

	return (
		<frame BackgroundTransparency={1} AnchorPoint={anchor} Position={position} Size={size}>
			<textbutton
				Activated={onClick}
				MouseEnter={() => hovered(true)}
				MouseLeave={() => {
					hovered(false);
					pressed(false);
				}}
				MouseButton1Down={() => pressed(true)}
				MouseButton1Up={() => pressed(false)}
				Text={text}
				TextSize={() => px(24)}
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={buttonPosition}
				Size={buttonSize}
				{...native}
			>
				{children}
			</textbutton>
		</frame>
	);
}
