import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTaskById, toggleTaskById } from 'redux/tasks/actions';

import css from './Task.module.css';

export const Task = ({ task, toggleTask, deleteTask }) => {
  // const dispatch = useDispatch();

  // const deleteTask = () => dispatch(deleteTaskById(task.id));
  // const toggleTask = () => dispatch(toggleTaskById(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <p className={css.text}>{task.text}</p>
      <button onClick={() => deleteTask(task.id)} className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
