import { Button } from '@mui/material';
import ErrorBoundary from 'components/ErrorBoundary';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppBar } from 'redux-template/AppBar/AppBar';
import { Layout } from 'redux-template/Layout/Layout';
import { TaskForm } from 'redux-template/TaskForm/TaskForm';
import { TaskList } from 'redux-template/TaskList/TaskList';
import { fetchTasks } from 'redux/tasks/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
    return () => {};
  }, [dispatch]);

  const request = async () => {
    try {
      const data = await new Promise((res, rej) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            res([]);
            return;
          }
          rej('Error');
        }, 1000);
      });
      return data;
    } catch (error) {
      console.log('Error', error);
      return [];
    }
  };

  const check = async () => {
    const data = await request();
    console.log('DATA!', data);
  };

  return (
    <>
      <Layout>
        <AppBar />
        <ErrorBoundary>
          <TaskForm />
        </ErrorBoundary>
        <TaskList />
      </Layout>
      <Button onClick={check}>CHECK REQUEST</Button>
    </>
  );
};
