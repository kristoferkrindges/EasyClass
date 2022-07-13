import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SessionContextProvider } from "./context/SessionContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<SessionContextProvider>
			<App />
		</SessionContextProvider>
	</React.StrictMode>
);
