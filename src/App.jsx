import { Route, Routes } from 'react-router-dom';
import About from 'pages/About/About';
import LoginForm from 'pages/LoginForm/LoginForm';
import NotFound from 'pages/NotFound/NotFound';
import NewsItem from 'pages/NewsItem/NewsItem';
import NewsAuthor from 'pages/NewsAuthor/NewsAuthor';
import NewsList from 'pages/NewsList/NewsList';
import SharedLayout from 'components/SharedLayout';
import NewsLayout from 'components/NewsLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<LoginForm />} />
        <Route path="about" element={<About />} />
        <Route path="news" element={<NewsLayout />}>
          <Route index element={<NewsList />} />
          <Route path=":query" element={<NewsList />} />
          <Route path=":newsId" element={<NewsItem />}>
            <Route path=":authorId" element={<NewsAuthor />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
