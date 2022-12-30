import { Button } from '@mui/material';
import ControlledCitySelect from 'components/ControlledCitySelect/ControlledCitySelect';
import ErrorBoundary from 'components/ErrorBoundary';
import { CITY_OPTIONS } from 'constants/loginForm';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { AppBar } from 'redux-template/AppBar/AppBar';
import { Layout } from 'redux-template/Layout/Layout';
import { TaskForm } from 'redux-template/TaskForm/TaskForm';
import { TaskList } from 'redux-template/TaskList/TaskList';
import { store } from 'redux/store';

const ValidSyntax = () => {
  return [<div key={1}>Div 1</div>, 'asdasd', <span key={2}>span 1</span>];
};

export const App = () => {
  const [city, setCity] = useState(CITY_OPTIONS.Dnipro);
  const [counter, setCounter] = useState(0);
  const divRef = useRef();

  useEffect(() => {
    console.log('componentDidMount', divRef.current.focus);
    // const interval = setInterval(
    //   () => console.log('Interval', new Date().toISOString()),
    //   1000
    // );
    return () => {
      console.log('componentWillUnmount');
      // clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log('componentDidUpdate counter', counter);

    if (!counter) return;
    const interval = setInterval(
      () => console.log('Interval', new Date().toISOString()),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  useEffect(() => {
    if (city !== CITY_OPTIONS.Dnipro) {
      setCounter(1);
    }
  }, [city]);

  return (
    <Provider store={store}>
      <Layout>
        <ControlledCitySelect city={city} />
        <ValidSyntax />
        <AppBar />
        <ErrorBoundary>
          <TaskForm />
        </ErrorBoundary>
        <TaskList />
      </Layout>
      <Button onClick={() => setCity(CITY_OPTIONS.Lviv)}>Change City</Button>
      <div ref={divRef}>Counter Value: {counter}</div>
      <Button
        onClick={() => {
          setCounter(prev => prev + 1);
          setCounter(prev => prev + 1);
          setCounter(prev => prev + 1);
        }}
      >
        Update Counter
      </Button>
    </Provider>
  );
};
