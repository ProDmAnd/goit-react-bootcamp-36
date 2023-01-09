import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from 'redux/tasks/operations';

import css from './Task.module.css';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const remove = () => dispatch(deleteTask(task.id));
  const toggle = () => dispatch(toggleTask(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={toggle}
      />
      <p className={css.text}>{task.text}</p>
      <button onClick={remove} className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
