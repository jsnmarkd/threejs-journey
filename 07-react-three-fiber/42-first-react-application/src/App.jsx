import { useState, useMemo } from "react";
import Clicker from "./Clicker.jsx";
import People from "./People.jsx";

export default function App({ children, clickersCount }) {
  const [hasClicker, setHasClicker] = useState(true);
  const [count, setCount] = useState(0);

  const toggleClickerClick = () => {
    setHasClicker(!hasClicker);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const colors = useMemo(() => {
    const colors = [];

    for (let i = 0; i < clickersCount; i++) {
      colors.push(`hsl(${Math.random() * 360}deg, 100%, 75%)`);
    }

    return colors;
  }, [clickersCount]);

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
              color={colors[index]}
            />
          ))}
        </>
      )}
      <People />
    </>
  );
}
