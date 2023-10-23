import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // update
    const id = setInterval(() => {
      setCount((value) => value + 1);
    }, 1000);

    return () => {
      // unmount
      clearInterval(id);
    };
  }, []); // mount

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};
