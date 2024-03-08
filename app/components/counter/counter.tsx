"use client"

import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <h2>{amount}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {/* <label htmlFor="amount">Amount</label> */}
      <input
        data-testid="amount"
        id="amount"
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button onClick={() => setCount(count + 1)}>Increments</button>
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  );
};
