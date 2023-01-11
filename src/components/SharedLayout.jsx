import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from './AppBar/AppBar';
import Wrapper from './Wrapper/Wrapper';

const SharedLayout = () => {
  return (
    <>
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
