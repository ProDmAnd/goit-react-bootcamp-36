import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Wrapper from './Wrapper/Wrapper';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

export default SharedLayout;
