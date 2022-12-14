import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import css from './Products.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectProductsError,
  selectProductsList,
  selectProductsLoading,
} from 'redux/products/selectors';
import { getProductsList } from 'redux/products/actions';
import { cartActions } from 'redux/cart/slice';

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const products = useSelector(selectProductsList);
  const errorMessage = useSelector(selectProductsError);
  const loading = useSelector(selectProductsLoading);

  useEffect(() => {
    dispatch(
      getProductsList({ rating_greater_than: 4.99, price_greater_than: 10 })
    );
  }, [dispatch]);

  const loadingText = !products.length ? (
    <h4>Loading...</h4>
  ) : (
    <h4>Updating List...</h4>
  );

  return (
    <>
      {loading && loadingText}
      {errorMessage && <p>{errorMessage}</p>}
      <div className={css.container}>
        {!errorMessage &&
          products.map(({ id, name, price, tag_list, brand, image_link }) => (
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
                <Button
                  variant="outlined"
                  onClick={() =>
                    navigate(id.toString(), { state: { from: location } })
                  }
                >
                  Details
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    dispatch(
                      cartActions.add({ id, name, price, brand, image_link })
                    );
                  }}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          ))}
      </div>
    </>
  );
};

export default Products;
