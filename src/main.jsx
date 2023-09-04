import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./utils/MuiTheme.jsx";
import { IconContext } from "react-icons";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <IconContext.Provider value={{ className: "react-icons" }}>
            <App />
          </IconContext.Provider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
