import { useState } from "react";
import Clicker from "./Clicker.jsx";

export default function App({ children, clickersCount }) {
  const [hasClicker, setHasClicker] = useState(true);
  const [count, setCount] = useState(0);

  const toggleClickerClick = () => {
    setHasClicker(!hasClicker);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      {children}

      <div>Total count: {count}</div>

      <button onClick={toggleClickerClick}>
        {hasClicker ? "Hide" : "Show"} Clicker
      </button>
      {hasClicker && (
        <>
          {[...Array(clickersCount)].map((_, index) => (
            <Clicker
              key={index}
              increment={increment}
              keyName={`count${index}`}
              color={`hsl(${Math.random() * 360}deg, 100%, 75%)`}
            />
          ))}
        </>
      )}
    </>
  );
}
