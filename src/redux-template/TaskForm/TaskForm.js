import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { Button } from 'redux-template/Button/Button';
import { createTask } from 'redux/tasks/actions';

import css from './TaskForm.module.css';

export const TaskForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(
      createTask({
        id: nanoid(),
        text: form.elements.text.value,
        completed: false,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
