import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeConfig from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeConfig>
        <App />
    </ThemeConfig>
);
