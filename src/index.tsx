import App from "./App";
import "./reset.scss";
import "./index.scss";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "store/store";
import { Suspense } from "react";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);
container.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={'Loading...'}>
        <App />
      </Suspense>
    </Provider>
  </BrowserRouter>
);
