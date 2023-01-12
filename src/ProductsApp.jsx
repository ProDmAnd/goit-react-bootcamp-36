import { Outlet, Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import Profile from 'pages/Profile/Profile';
import { lazy, useEffect } from 'react';
import AppThemeProvider from 'contexts/AppThemeProvider';
import Cart from 'pages/Cart/Cart';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { useDispatch } from 'react-redux';
import { store } from 'redux/store';
import { getCurrentUser } from 'redux/user/operations';

const LazyAbout = lazy(() =>
  import(/* webpackChunkName: "about" */ 'pages/About/About')
);
const LazyNotFound = lazy(() =>
  import(/* webpackChunkName: "not-found" */ 'pages/NotFound/NotFound')
);
const LazyLoginForm = lazy(() =>
  import(/* webpackChunkName: "login-form" */ 'pages/LoginForm/LoginForm')
);

const LazyTaskApp = lazy(() =>
  import(/* webpackChunkName: "task-app" */ './TaskApp')
);

const LazyProducts = lazy(() =>
  import(/* webpackChunkName: "task-app" */ 'pages/Products/Products')
);

const LazyProductDetails = lazy(() =>
  import(
    /* webpackChunkName: "task-app" */ 'pages/ProductDetails/ProductDetails'
  )
);

const LazyNewsList = lazy(() =>
  import(/* webpackChunkName: "task-app" */ 'pages/NewsList/NewsList')
);

const ProductsApp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <AppThemeProvider>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={<LazyNewsList />}
            errorElement={<h1>Somethings went wrong</h1>}
          />
          <Route
            path="login"
            element={<PublicRoute element={<LazyLoginForm />} />}
          />
          <Route path="about" element={<LazyAbout title="Not About" />} />
          <Route path="products" element={<Outlet />}>
            <Route index element={<LazyProducts />} />
            <Route path=":id" element={<LazyProductDetails />} />
          </Route>
          <Route
            path="profile"
            element={<PrivateRoute element={<Profile />} redirectTo="/login" />}
          />
          <Route
            path="cart"
            element={<PrivateRoute element={<Cart />} redirectTo="/login" />}
          />
          <Route
            path="tasks"
            element={
              <PrivateRoute element={<LazyTaskApp />} redirectTo="/login" />
            }
          />
          <Route path="*" element={<LazyNotFound />} />
        </Route>
      </Routes>
    </AppThemeProvider>
  );
};

export default ProductsApp;
