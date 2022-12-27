import { Card, CardContent } from '@mui/material';
import useQuery from 'hooks/useQuery';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { getCharts } from 'services/ShazamAPI';
import css from './Songs.module.css';

const Songs = () => {
  const [charts, fetchCharts, loading, errorMessage] = useQuery([], getCharts);

  useEffect(() => {
    fetchCharts();
  }, [fetchCharts]);

  return (
    <>
      {loading && <h4>Loading...</h4>}
      {errorMessage && <p>{errorMessage}</p>}
      <div className={css.container}>
        {!errorMessage &&
          charts.map(({ title, subtitle, key }) => (
            <Card key={key}>
              <CardContent>
                <h4>{title}</h4>
                <p>{subtitle}</p>
              </CardContent>
            </Card>
          ))}
      </div>
    </>
  );
};

export default Songs;
