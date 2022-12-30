import { Fragment, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from './AppBar/AppBar';
import Header from './Header/Header';
import Wrapper from './Wrapper/Wrapper';

const SharedLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <ResponsiveAppBar />
      <Wrapper>
        <Suspense fallback={<div>Loading some page</div>}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </>
  );
};

export default SharedLayout;
