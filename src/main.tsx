import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="w-full min-h-screen h-full bg-indigo-950">
      {" "}
      <App />{" "}
    </div>
  </StrictMode>
);
