import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';
import clsx from 'clsx';
import useQuery from 'hooks/useQuery';
import React, { useEffect, useMemo } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { fetchArticles } from 'services/HNewsAPI';
import css from './NewsList.module.css';

const NewsList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // const [hitsPerPage, setHitsPerPage] = useState('10');
  const [articles, getArticles, loading, errorMessage] = useQuery(
    [],
    fetchArticles
  );
  const [searchParams, setSearchParams] = useSearchParams({
    query: '',
    hitsPerPage: 10,
    sort: 'asc',
  });

  // const [query, setQuery] = useState(searchParams.get('query'));
  // const [sort, setSort] = useState(searchParams.get('sort'));
  const params = useMemo(
    () =>
      Object.fromEntries(
        [...searchParams].map(item => {
          if (!Number.isNaN(parseFloat(item[1]))) {
            return [item[0], parseFloat(item[1])];
          }
          return item;
        })
      ),
    [searchParams]
  );

  useEffect(() => {
    const queryParams = { ...params };
    delete queryParams.sort;
    getArticles(queryParams);
  }, [getArticles, params]);

  const News = useMemo(() => {
    const sortedArticles = [...articles].sort((a, b) =>
      params?.sort === 'asc'
        ? a.num_comments - b.num_comments
        : b.num_comments - a.num_comments
    );
    return (
      <div className={css.newsContainer}>
        {sortedArticles.map(({ objectID, url, title, story_title }) => (
          <Card key={objectID}>
            <CardContent>
              <Typography variant="h6">{title || story_title}</Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                onClick={() =>
                  navigate(objectID, { state: { from: location } })
                }
              >
                Open
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    );
  }, [articles, params, navigate, location]);

  return (
    <>
      <TextField
        name="query"
        value={params?.query}
        onChange={({ target: { name, value } }) => {
          // setQuery(value);
          setSearchParams({ ...params, [name]: value });
        }}
      />
      <div className={clsx(css.flexContainer, css.buttons)}>
        <Button
          onClick={() => {
            // setSort('asc');
            setSearchParams({ ...params, sort: 'asc' });
          }}
          disabled={params?.sort === 'asc'}
        >
          Sort by Asc
        </Button>
        <Button
          onClick={() => {
            // setSort('desc');
            setSearchParams({ ...params, sort: 'desc' });
          }}
          disabled={params?.sort === 'desc'}
        >
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
