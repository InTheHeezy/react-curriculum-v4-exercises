export const VisibleTasks = ({ visibleTasks }) => {
  return (
    <ul>
      {visibleTasks.map((task) => (
        <li key={task.id}>
          {task.title} {task.completed ? '✅' : '⏳'}
        </li>
      ))}
    </ul>
  );
};
