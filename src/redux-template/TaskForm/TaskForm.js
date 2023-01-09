import { useDispatch } from 'react-redux';
import { Button } from 'redux-template/Button/Button';
import { createTask } from 'redux/tasks/operations';

import css from './TaskForm.module.css';

export const TaskForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    // dispatch(createTask(form.elements.text.value));
    dispatch(createTask(form.elements.text.value));
    form.reset();
  };

  const logFocused =
    (text = '', anotherValue = '') =>
    (text2 = '') => {
      console.log(anotherValue);
      return () => {
        const parsedText = text.toUpperCase();
        console.log(text, text2);
        return parsedText.length + text2.length;
      };
    };
  const logWithText = logFocused('input focused', 'anotherValue');

  const evnetListener = logWithText('new text');
  console.log('call eventListener', evnetListener());

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        onFocus={evnetListener}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
