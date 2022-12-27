import { Fragment, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Wrapper from './Wrapper/Wrapper';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Suspense fallback={<div>Loading some page</div>}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </>
  );
};

export default SharedLayout;
