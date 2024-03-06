"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>{count}</h2>
      <button type="button" onClick={() => setCount(count + 2)}>
        +
      </button>
    </>
  );
}
