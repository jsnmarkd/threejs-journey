import "./style.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

const toto = false;

root.render(
  <>
    <h1 className="title">
      {/* This is a comment */}
      Hello {toto ? "yes" : "no"}
    </h1>
    <p>
      Some <br /> content
    </p>
    <input type="checkbox" id="the-checkbox" />
    <label htmlFor="the-checkbox">Check me!</label>
  </>
);
