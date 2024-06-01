import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import theme from './theme.js';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
} from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import reduxStore from "./redux";

const { store, persistor } = reduxStore();
ReactDOM.createRoot(document.getElementById('root')).render(
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
 
)
