import { filterStatus } from 'constants/filtres';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from 'redux-template/Task/Task';
import { deleteTaskById, toggleTaskById } from 'redux/tasks/actions';
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
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  const statusFilter = useSelector(state => state.filters.status);
  const filteredTasks = getVisibleTasks(tasks, statusFilter);

  const toggleTask = id => dispatch(toggleTaskById(id));
  const deleteTask = id => dispatch(deleteTaskById(id));

  return (
    <ul className={css.list}>
      {filteredTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
        </li>
      ))}
    </ul>
  );
};
