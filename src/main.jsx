import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WhaterApps from "./WhaterApps";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WhaterApps />
  </StrictMode>
);
