//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// (Write your explanation here)
/*
    
    BUG - Explanation
    Since there is no event listener to determine when 
    the DOM should render, useEffect is constantly running.
    This causes the DOM to render without limits. 
    Because of that the counter increases 
    by 1 everytime its rendering.
     
    FIX - Explanation
    To make useEffect only render once without
    an event listener, I added an empty
    dependency array which tells React that
    useEffect will not change any values.
  */
