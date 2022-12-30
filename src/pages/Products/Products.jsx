import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import useQuery from 'hooks/useQuery';
import React, { useState } from 'react';
import { useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
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
          products.map(({ id, name, price, tag_list, brand }) => (
            <Card key={id} sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent
                sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
              >
                <Typography
                  sx={{ fontSize: 14, textTransform: 'capitalize' }}
                  color="text.secondary"
                  gutterBottom
                >
                  {brand}
                </Typography>
                <Typography variant="h6" component="div">
                  {name}
                </Typography>
                <Typography color="text.secondary">
                  {tag_list.map(tag => `#${tag}`).join(' ')}
                </Typography>
                <Typography variant="body1">${price}</Typography>
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="outlined">Details</Button>
                <Button variant="contained">Add to Cart</Button>
              </CardActions>
            </Card>
          ))}
      </div>
    </>
  );
};

export default Products;
