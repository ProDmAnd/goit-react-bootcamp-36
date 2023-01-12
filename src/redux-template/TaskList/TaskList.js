import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Task } from 'redux-template/Task/Task';
import { selectVisilbeTasks } from 'redux/tasks/selectors';
import { useGetListQuery } from 'redux/tasks/slice';
import css from './TaskList.module.css';

export const TaskList = () => {
  const { data: tasks = [], isSuccess, isError } = useGetListQuery();

  useEffect(() => {
    if (isSuccess) {
      toast.success('You downloaded tasks');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error('Something went wrong...');
    }
  }, [isError]);
  // const visibleTasks = useSelector(selectVisilbeTasks);

  return (
    <div>
      <ul className={css.list}>
        {tasks.map(task => (
          <li className={css.listItem} key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};
