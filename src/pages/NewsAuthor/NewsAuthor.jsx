import { useParams } from 'react-router-dom';

const NewsAuthor = () => {
  const { newsId, authorId } = useParams();
  return (
    <div>
      <h3>NewsAuthor: {authorId}</h3>
      <h5>NewsItem: {newsId}</h5>
    </div>
  );
};

export default NewsAuthor;
