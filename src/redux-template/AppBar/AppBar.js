import { StatusFilter } from 'redux-template/StatusFilter/StatusFilter';
import { TaskCounter } from 'redux-template/TaskCounter/TaskCounter';
import { useGetListQuery } from 'redux/tasks/slice';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoading } = useGetListQuery();
  return (
    <>
      <header className={css.wrapper}>
        <section className={css.section}>
          <h2 className={css.title}>Tasks</h2>
          <TaskCounter />
        </section>
        <section className={css.section}>
          <h2 className={css.title}>Filter by status</h2>
          <StatusFilter />
        </section>
      </header>
      {isLoading && <p>Loading...</p>}
    </>
  );
};
