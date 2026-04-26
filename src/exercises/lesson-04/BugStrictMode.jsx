// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(interval); //cleanup function
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
/*

  Strictmode here shows that there needs to be 
  some sort of clean up function since the 
  counter is updating by 2 instead of 1. 

  This is happening because there is no clean up function
  so if the useEffect were to run multiple times (e.g twice here)
  there is nothing cleaning up prior executions of useEffect 
  hence its updating by 2 instead of 1.
*/
