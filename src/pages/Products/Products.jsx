import { Card, CardContent } from '@mui/material';
import useQuery from 'hooks/useQuery';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { searchMakeupProducts } from 'services/MakeupAPI';
import css from './Products.module.css';

const Products = () => {
  /** @type {[import('services/MakeupAPI').MakeupResponse[], (params?: import('services/MakeupAPI').MakeupQueryParams) => Promise<any>, boolean, string]} */
  const [products, fetchProducts, loading, errorMessage] = useQuery(
    [],
    searchMakeupProducts
  );

  useEffect(() => {
    fetchProducts({ rating_greater_than: 4.99 });
  }, [fetchProducts]);

  return (
    <>
      {loading && <h4>Loading...</h4>}
      {errorMessage && <p>{errorMessage}</p>}
      <div className={css.container}>
        {!errorMessage &&
          products.map(({ id, name, price, tag_list }) => (
            <Card key={id}>
              <CardContent>
                <h4>{name}</h4>
                <p>Price: {price}</p>
                <p>{tag_list.map(tag => `#${tag}`).join(' ')}</p>
              </CardContent>
            </Card>
          ))}
      </div>
    </>
  );
};

export default Products;
