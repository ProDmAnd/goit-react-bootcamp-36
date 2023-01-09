import { filterStatus } from 'constants/filtres';
import { useSelector } from 'react-redux';
import { Task } from 'redux-template/Task/Task';
import css from './TaskList.module.css';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case filterStatus.active:
      return tasks.filter(task => !task.completed);
    case filterStatus.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const statusFilter = useSelector(state => state.filters.status);
  const filteredTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <div
      onKeyDown={e => {
        e.stopPropagation();
        console.log('list keydown evnet', e.code);
      }}
    >
      <ul className={css.list}>
        {filteredTasks.map(task => (
          <li className={css.listItem} key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};
