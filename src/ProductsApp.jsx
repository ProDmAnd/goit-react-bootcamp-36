import { Outlet, Route, Routes } from 'react-router-dom';
import NewsItem from 'pages/NewsItem/NewsItem';
import NewsAuthor from 'pages/NewsAuthor/NewsAuthor';
import NewsList from 'pages/NewsList/NewsList';
import SharedLayout from 'components/SharedLayout';
import NewsLayout from 'components/NewsLayout';
import Products from 'pages/Products/Products';
import Profile from 'pages/Profile/Profile';
import { lazy } from 'react';
import ProductDetails from 'pages/ProductDetails/ProductDetails';

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
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={<LazyLoginForm />}
          errorElement={<h1>Somethings went wrong</h1>}
        />
        <Route path="news" element={<NewsLayout />}>
          <Route index element={<NewsList />} />
          <Route path=":newsId" element={<NewsItem />}>
            <Route path=":authorId" element={<NewsAuthor />} />
          </Route>
        </Route>
        <Route path="about" element={<LazyAbout title="Not About" />} />
        <Route path="products" element={<Outlet />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<LazyNotFound />} />
      </Route>
    </Routes>
  );
};
