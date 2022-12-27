import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const NewsItem = () => {
  const { newsId, authorId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    // ....запит до бд за цією новиною
  }, [newsId]);

  return (
    <div>
      <Button
        onClick={() => {
          navigate(location.state?.from || '/news');
        }}
      >
        Back to News
      </Button>
      <h3>NewsItem: {newsId}</h3>
      <h5>Author: {authorId}</h5>
    </div>
  );
};

export default NewsItem;
