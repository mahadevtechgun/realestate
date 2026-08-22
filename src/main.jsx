import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import App from "./App.jsx";
import { store } from "./redux/store";

import "./index.css";
import "./App.css";
import "./i18n.js";

import ScrollToTop from "./components/ui/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />

        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="dark"
          newestOnTop
          pauseOnHover={false}
        />

        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);