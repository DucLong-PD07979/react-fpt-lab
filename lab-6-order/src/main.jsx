import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductContextProvider } from "./context/productContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ProductContextProvider>
            <App />
        </ProductContextProvider>
    </React.StrictMode>
);
