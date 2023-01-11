import { Outlet, Route, Routes } from 'react-router-dom';
import NewsList from 'pages/NewsList/NewsList';
import SharedLayout from 'components/SharedLayout';
import Products from 'pages/Products/Products';
import Profile from 'pages/Profile/Profile';
import { lazy } from 'react';
import ProductDetails from 'pages/ProductDetails/ProductDetails';
import AppThemeProvider from 'contexts/AppThemeProvider';
import Cart from 'pages/Cart/Cart';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { TaskApp } from 'TaskApp';

const LazyAbout = lazy(() =>
  import(/* webpackChunkName: "about" */ 'pages/About/About')
);
const LazyNotFound = lazy(() =>
  import(/* webpackChunkName: "not-found" */ 'pages/NotFound/NotFound')
);
const LazyLoginForm = lazy(() =>
  import(/* webpackChunkName: "login-form" */ 'pages/LoginForm/LoginForm')
);

export const ProductsApp = () => {
  return (
    <AppThemeProvider>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={<NewsList />}
            errorElement={<h1>Somethings went wrong</h1>}
          />
          <Route
            path="login"
            element={<PublicRoute element={<LazyLoginForm />} />}
          />
          <Route path="about" element={<LazyAbout title="Not About" />} />
          <Route path="products" element={<Outlet />}>
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDetails />} />
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
            element={<PrivateRoute element={<TaskApp />} redirectTo="/login" />}
          />
          <Route path="*" element={<LazyNotFound />} />
        </Route>
      </Routes>
    </AppThemeProvider>
  );
};
