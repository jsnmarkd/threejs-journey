import { useState, useEffect } from "react";

export default function Clicker() {
  const [count, setCount] = useState(
    parseInt(localStorage.getItem("count") ?? 0)
  );

  useEffect(() => {
    return () => {
      localStorage.removeItem("count");
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

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
