import { Route, Routes } from 'react-router-dom';
import NewsItem from 'pages/NewsItem/NewsItem';
import NewsAuthor from 'pages/NewsAuthor/NewsAuthor';
import NewsList from 'pages/NewsList/NewsList';
import SharedLayout from 'components/SharedLayout';
import NewsLayout from 'components/NewsLayout';
import Products from 'pages/Products/Products';
import Profile from 'pages/Profile/Profile';
import { lazy } from 'react';
import { Layout } from 'redux-template/Layout/Layout';
import { AppBar } from 'redux-template/AppBar/AppBar';
import { TaskForm } from 'redux-template/TaskForm/TaskForm';
import { TaskList } from 'redux-template/TaskList/TaskList';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

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

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<SharedLayout />}>
//         <Route index element={<LazyLoginForm />} />
//         <Route path="news" element={<NewsLayout />}>
//           <Route index element={<NewsList />} />
//           <Route path=":newsId" element={<NewsItem />}>
//             <Route path=":authorId" element={<NewsAuthor />} />
//           </Route>
//         </Route>
//         <Route path="about" element={<LazyAbout title="Not About" />} />
//         <Route path="products" element={<Products />} />
//         <Route path="profile" element={<Profile />} />
//         <Route path="*" element={<LazyNotFound />} />
//       </Route>
//     </Routes>
//   );
// };

export const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <AppBar />
        <TaskForm />
        <TaskList />
      </Layout>
    </Provider>
  );
};
