import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/global.css";
import { App } from "./App.jsx";
import { CounterProvider } from "./context/counter-provider/counter-provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </StrictMode>,
);
