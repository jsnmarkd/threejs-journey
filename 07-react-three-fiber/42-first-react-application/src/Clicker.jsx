import { useState } from "react";

export default function Clicker() {
  const [count, setCount] = useState(0);

  const buttonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      Clicker count: {count}
      <button onClick={buttonClick}>Click me</button>
    </div>
  );
}
