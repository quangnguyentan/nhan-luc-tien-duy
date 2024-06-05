import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import theme from "./theme.js";
import CssBaseline from "@mui/material/CssBaseline";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import reduxStore from "./redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
const { store, persistor } = reduxStore();
ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <Helmet>
      
          <meta charset="UTF-8" />
          <link rel="icon" type="image/svg+xml" href="/vite.svg" />
          <meta
            http-equiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="stylesheet"
            href="https://video-react.github.io/assets/video-react.css"
          />
          <link
            href="https://vjs.zencdn.net/8.10.0/video-js.css"
            rel="stylesheet"
          />
          <script src="https://vjs.zencdn.net/8.10.0/video.min.js"></script>
          <title>Sợ Vợ TV</title>
       
    </Helmet>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <BrowserRouter>
            <CssVarsProvider theme={theme}>
              <CssBaseline />
              <App />
            </CssVarsProvider>
          </BrowserRouter>
        </React.StrictMode>
      </PersistGate>
    </Provider>
  </HelmetProvider>
);
