import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

//redux imports
import appStore from "./store/appStore";
import { Provider } from "react-redux";

//root
import Root from "./Root";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <Root />
    </Provider>
  </StrictMode>,
);
