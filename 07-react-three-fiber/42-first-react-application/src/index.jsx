import "./style.css";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const root = createRoot(document.querySelector("#root"));

const toto = "there";

root.render(
  <div>
    <App>
      <h1>My React App</h1>
      <h2>And a fancy subtitle</h2>
    </App>
  </div>
);
