import { Box, Button, Paper, Typography } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartList } from 'redux/cart/selectors';
import { cartActions } from 'redux/cart/slice';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const cartList = useSelector(selectCartList);

  const removeFromCart = id => {
    dispatch(cartActions.remove(id));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box>
        <Button
          startIcon={<KeyboardBackspaceIcon />}
          onClick={() => navigate(location.state?.from || '/products')}
        >
          Back to products
        </Button>
      </Box>
      <Box sx={{ alignSelf: 'center' }}>
        {Object.entries(cartList).map(item => (
          <Paper key={item[0]} sx={{ width: 400, mb: 1, p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mr: 2 }}>
                <img src={item[1][0].image_link} alt="product" height={100} />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  mb: 2,
                  alignItems: 'center',
                }}
              >
                <Box>
                  <Typography variant="h6">{item[1][0].name}</Typography>
                  <Typography variant="h6">
                    Brand: {item[1][0].brand?.toUpperCase()}
                  </Typography>
                  <Typography variant="h6">${item[1].price}</Typography>
                </Box>
                <Box>
                  <Typography variant="body1">
                    Count: {item[1].length}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => removeFromCart(item[0])}
                  >
                    Remove from cart
                  </Button>
                </Box>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Cart;
