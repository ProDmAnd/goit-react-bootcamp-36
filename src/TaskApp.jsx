import ErrorBoundary from 'components/ErrorBoundary';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppBar } from 'redux-template/AppBar/AppBar';
import { Layout } from 'redux-template/Layout/Layout';
import { TaskForm } from 'redux-template/TaskForm/TaskForm';
import { TaskList } from 'redux-template/TaskList/TaskList';
import { fetchTasks } from 'redux/tasks/operations';

const TaskApp = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchTasks());
  //   return () => {};
  // }, [dispatch]);

  return (
    <>
      <Layout>
        <AppBar />
        <ErrorBoundary>
          <TaskForm />
        </ErrorBoundary>
        <TaskList />
      </Layout>
    </>
  );
};

export default TaskApp;
