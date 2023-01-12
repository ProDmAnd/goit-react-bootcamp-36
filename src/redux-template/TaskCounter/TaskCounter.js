import { useSelector } from 'react-redux';
import { selectTasksCount } from 'redux/tasks/selectors';
import { useGetListQuery } from 'redux/tasks/slice';
import css from './TaskCounter.module.css';

export const TaskCounter = () => {
  // const { active, completed } = useSelector(selectTasksCount);
  const { data: tasks = [] } = useGetListQuery();

  const { active, completed } = tasks.reduce(
    (acc, { completed }) =>
      completed
        ? { ...acc, completed: acc.completed + 1 }
        : { ...acc, active: acc.active + 1 },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={css.text}>Active: {active}</p>
      <p className={css.text}>Completed: {completed}</p>
    </div>
  );
};
