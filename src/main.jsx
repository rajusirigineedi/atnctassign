import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import store from "./store/store.js";
import ToastConfig from "./utils/ToastConfig.jsx";
import { theme } from "./utils/constants.js";

// Entry point of the application.
// Redux, Router, and Ant Design's ConfigProvider are wrapped around the App component.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ToastConfig /> {/* Toast */}
        <ConfigProvider theme={theme}>
          <App />
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
