import { Players } from "@rbxts/services";
import Vide, { mount } from "@rbxts/vide";

import { App } from "./app";

mount(() => <App />, Players.LocalPlayer.WaitForChild("PlayerGui"));
