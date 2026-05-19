import { useEffect, useState } from 'react';
import { useStudentWork } from './hooks/useStudentWork';
import { useVisibleTask } from './hooks/useVisibleTask';
import { isLoading } from './utils/isLoading';
import { FilterButton } from './components/FilterButton';
import { VisibleTasks } from './components/VisibleTasks';

export default function StudentWork() {
  const { tasks, setTasks, filter, setFilter, loading, setLoading } =
    useStudentWork();

  // call helper, if !null return helper. else ignore
  const loadTasks = isLoading(loading);
  if (loadTasks) return loadTasks;

  let visibleTasks = useVisibleTask(tasks, filter);
  let options = ['all', 'completed', 'pending'];

  return (
    <div>
      <h2>Welcome, Student</h2>

      <div>
        <FilterButton filter={filter} setFilter={setFilter} options={options} />
      </div>

      <ul>
        <VisibleTasks visibleTasks={visibleTasks} />
      </ul>
    </div>
  );
}
