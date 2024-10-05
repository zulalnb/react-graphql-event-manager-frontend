import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import App from "./App.jsx";
import "./index.css";

import client from "./apollo.js";

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
