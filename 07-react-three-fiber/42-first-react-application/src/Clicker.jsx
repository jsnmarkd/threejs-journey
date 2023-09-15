import { useState, useEffect, useRef } from "react";

export default function Clicker({ keyName, color, increment }) {
  const [count, setCount] = useState(
    parseInt(localStorage.getItem(keyName) ?? 0)
  );
  const button = useRef();
  console.log(button);

  useEffect(() => {
    button.current.style.backgroundColor = 'papayawhip';
    button.current.style.color = 'palevioletred';


    return () => {
      localStorage.removeItem(keyName);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(keyName, count);
  }, [count]);

  const buttonClick = () => {
    setCount(count + 1);
    increment();
  };

  return (
    <div>
      <div style={{ color }}>Clicker count: {count}</div>

      <button ref={button} onClick={buttonClick}>Click me</button>
    </div>
  );
}
