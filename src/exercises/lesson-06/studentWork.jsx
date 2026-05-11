import { useEffect, useState } from 'react';
import { useStudentWork } from './hooks/useStudentWork';
import { useVisibleTask } from './hooks/useVisibleTask';
import { isLoading } from './utils/isLoading';

export default function StudentWork() {
  const { tasks, setTasks, filter, setFilter, loading, setLoading } =
    useStudentWork();

  // call helper, if !null return helper. else ignore
  const loadTasks = isLoading(loading);
  if (loadTasks) return loadTasks;

  let visibleTasks = useVisibleTask(tasks, filter);

  return (
    <div>
      {/* #3: Hardcoded UI, not reusable */}
      <h2>Welcome, Student</h2>

      {/* #4: Repeated button JSX */}
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
        <p>Current filter: {filter}</p>
      </div>

      {/* #5: Inline list rendering */}
      <ul>
        {visibleTasks.map((task) => (
          <li key={task.id}>
            {task.title} {task.completed ? '✅' : '⏳'}
          </li>
        ))}
      </ul>
    </div>
  );
}
