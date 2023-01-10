import { useSelector } from 'react-redux';
import { Task } from 'redux-template/Task/Task';
import { selectVisilbeTasks } from 'redux/tasks/selectors';
import css from './TaskList.module.css';

export const TaskList = () => {
  const visibleTasks = useSelector(selectVisilbeTasks);

  return (
    <div>
      <ul className={css.list}>
        {visibleTasks.map(task => (
          <li className={css.listItem} key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};
