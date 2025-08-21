import React from "react";
import { createRoot } from "react-dom/client";
import { setup, tw } from "twind";

setup({});

const App = () => (
  <div
    className={tw`
      h-screen w-full bg-[url('assets/bg.svg')] bg-cover bg-top overflow-hidden
    `}
  />
);

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
