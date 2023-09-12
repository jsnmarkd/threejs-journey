import "./style.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

const toto = "there";

root.render(
  <>
    <h1 className="title" style={ { color: "coral", backgroundColor: 'floralwhite' } }>
      {/* Some comment */}
      Hello {toto}
    </h1>
    <p>
      Some content <br /> {Math.random()}
    </p>
    <input type="checkbox" id="the-checkbox" />
    <label htmlFor="the-checkbox">Check me!</label>
  </>
);
