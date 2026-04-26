// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  let [count, setCount] = useState(0);

  function handleAdd() {
    // count++;
    // setCount(count);
    setCount((count) => count + 1);
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// (Write your explanation here)
/*

    BUG - Explanation
    The original method of updating the counter is called
    and the value of count is the value on call (React can batch function calls). 
    This means that the value of count can be "stale", in other words, outdated. 

    FIX - Explanation
    The issue is fixed by something called functional updating.
    Essentially this method ensures that count is the correct
    updated value at all times.

  */
