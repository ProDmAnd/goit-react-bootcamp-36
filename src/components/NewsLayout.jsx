import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
  return (
    <div>
      <h4>News</h4>
      <p>News count: </p>
      <Outlet />
    </div>
  );
};

export default NewsLayout;
