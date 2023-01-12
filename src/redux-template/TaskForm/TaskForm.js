import { useDispatch } from 'react-redux';
import { Button } from 'redux-template/Button/Button';
import { useCreateMutation } from 'redux/tasks/slice';

import css from './TaskForm.module.css';

export const TaskForm = () => {
  const [createTask, { isLoading }] = useCreateMutation();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    // dispatch(createTask(form.elements.text.value));
    createTask(form.elements.text.value);
    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.field}
          type="text"
          name="text"
          placeholder="Enter task text..."
        />
        <Button type="submit">Add task</Button>
      </form>
      {isLoading && <div>Uploading task...</div>}
    </>
  );
};
