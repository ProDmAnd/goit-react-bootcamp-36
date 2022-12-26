import { Card, CardActions, CardContent, Typography } from '@mui/material';
import clsx from 'clsx';
import { Button } from 'components';
import { lsQueryConfigKey } from 'constants/api';
import useQuery from 'hooks/useQuery';
import React, { useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { fetchArticles } from 'services/HNewsAPI';
import css from './NewsList.module.css';

const NewsList = () => {
  // const [query, setQuery] = useState('');
  const [hitsPerPage, setHitsPerPage] = useState('10');
  const [articles, getArticles, loading, errorMessage] = useQuery(
    [],
    fetchArticles
  );
  const { query } = useParams();

  const [asc, setAsc] = useState(true);

  useEffect(() => {
    const queryConfig =
      JSON.parse(localStorage.getItem(lsQueryConfigKey)) ?? {};

    getArticles({ query, hitsPerPage });
    // setQuery(queryConfig?.query);
    setHitsPerPage(queryConfig?.hitsPerPage);
  }, [getArticles, query, hitsPerPage]);

  const News = useMemo(() => {
    const sortedArticles = [...articles].sort((a, b) =>
      asc ? a.num_comments - b.num_comments : b.num_comments - a.num_comments
    );
    return (
      <div className={css.newsContainer}>
        {sortedArticles.map(({ objectID, url, title, story_title }) => (
          <Card key={objectID}>
            <CardContent>
              <Typography variant="h6">{title || story_title}</Typography>
            </CardContent>
            <CardActions>
              <Link to={`${objectID}/${Math.random()}`}>Open</Link>
            </CardActions>
          </Card>
        ))}
      </div>
    );
  }, [articles, asc]);

  return (
    <>
      <div className={clsx(css.flexContainer, css.buttons)}>
        <Button onClick={() => setAsc(true)} disabled={asc}>
          Sort by Asc
        </Button>
        <Button onClick={() => setAsc(false)} disabled={!asc}>
          Sort by Desc
        </Button>
      </div>
      {loading && <h3>Loading...</h3>}
      {errorMessage && <p>{errorMessage}</p>}
      {articles?.length && !loading ? News : null}
    </>
  );
};

export default NewsList;
