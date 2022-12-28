import { useSelector } from 'react-redux';
import css from './TaskCounter.module.css';

export const TaskCounter = () => {
  const tasks = useSelector(state => state.tasks);

  const activeTasksCount = tasks.filter(({ completed }) => !completed).length;
  const completedTaskCount = tasks.filter(({ completed }) => completed).length;

  const { active, completed } = tasks.reduce(
    (acc, { completed }) =>
      completed
        ? { ...acc, completed: acc.completed + 1 }
        : { ...acc, active: acc.active + 1 },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={css.text}>
        Active: {activeTasksCount} {active}
      </p>
      <p className={css.text}>
        Completed: {completedTaskCount} {completed}
      </p>
    </div>
  );
};
