/* @refresh reload */
import "windi.css";

import { hashIntegration, Router } from "@solidjs/router";
import { render } from "solid-js/web";
import App from "./app";

render(
	() => (
		<Router source={hashIntegration()}>
			<App />
		</Router>
	),
	document.getElementById("root") as HTMLElement,
);
