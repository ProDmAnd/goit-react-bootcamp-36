import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NewsItem = () => {
  const { newsId, authorId } = useParams();
  useEffect(() => {
    // ....запит до бд за цією новиною
  }, [newsId]);
  return (
    <div>
      <h3>NewsItem: {newsId}</h3>
      <h5>Author: {authorId}</h5>
    </div>
  );
};

export default NewsItem;
