import { Route, Routes } from 'react-router-dom';
import NewsItem from 'pages/NewsItem/NewsItem';
import NewsAuthor from 'pages/NewsAuthor/NewsAuthor';
import NewsList from 'pages/NewsList/NewsList';
import SharedLayout from 'components/SharedLayout';
import NewsLayout from 'components/NewsLayout';
import Songs from 'pages/Songs/Songs';
import Profile from 'pages/Profile/Profile';
import { lazy } from 'react';

const LazyAbout = lazy(() =>
  import(/* webpackChunkName: "about" */ 'pages/About/About')
);
const LazyNotFound = lazy(() =>
  import(/* webpackChunkName: "not-found" */ 'pages/NotFound/NotFound')
);
const LazyLoginForm = lazy(() =>
  import(/* webpackChunkName: "login-form" */ 'pages/LoginForm/LoginForm')
);

// const LazyAbout = lazy(() => import('pages/About/About'));
// const LazyNotFound = lazy(() => import('pages/NotFound/NotFound'));
// const LazyLoginForm = lazy(() => import('pages/LoginForm/LoginForm'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<LazyLoginForm />} />
        <Route path="news" element={<NewsLayout />}>
          <Route index element={<NewsList />} />
          <Route path=":newsId" element={<NewsItem />}>
            <Route path=":authorId" element={<NewsAuthor />} />
          </Route>
        </Route>
        <Route path="about" element={<LazyAbout title="Not About" />} />
        <Route path="songs" element={<Songs />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<LazyNotFound />} />
      </Route>
    </Routes>
  );
};
