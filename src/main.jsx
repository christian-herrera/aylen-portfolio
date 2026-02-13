import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import AppRouter from "./routes/AppRouter";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AppRouter />
    </StrictMode>
);