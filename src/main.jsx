import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App.jsx";
import { store } from "./redux/store";

import "./index.css";
import "./App.css";
import "./i18n.js";

import ScrollToTop from "./components/ui/ScrollToTop.jsx";

const GOOGLE_CLIENT_ID = "880139872181-tahgcbj2v13gahd4ho1mfb39vu0nkkgj.apps.googleusercontent.com";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={"880139872181-tahgcbj2v13gahd4ho1mfb39vu0nkkgj.apps.googleusercontent.com"}>
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
    </GoogleOAuthProvider>
  </StrictMode>
);