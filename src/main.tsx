import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";


import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
const rootElement = document.getElementById("root")!;
createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
