import { Box, Button, Rating, Typography } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MakeupAPI from 'services/MakeupAPI';

const ProductDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [product, setProduct] = useState({});

  // /** @type {import('services/MakeupAPI').MakeupResponse} */
  // const product = {
  //   id: 508,
  //   brand: 'nyx',
  //   name: 'NYX Mosaic Powder Blush Paradise',
  //   price: '10.49',
  //   price_sign: null,
  //   currency: null,
  //   image_link:
  //     'https://d3t32hsnjxo7q6.cloudfront.net/i/deedb7bd74bda43f062a09aab2ee1ec8_ra,w158,h184_pa,w158,h184.png',
  //   product_link:
  //     'https://well.ca/products/nyx-mosaic-powder-blush-paradise_106230.html?cat=328',
  //   website_link: 'https://well.ca',
  //   description:
  //     'NYX Mosaic Powder Blush is a medley of that creates a flush of color and dazzling glow for every skin tone. Features:Five shades in one palette, this blush is bright pink with gold shimmerWorks as blush and highlighterFlattering on every skin toneUse to highlight, enhance \u0026 brighten Each mosaic of color blends beautifully with magical results',
  //   rating: 5.0,
  //   category: null,
  //   product_type: 'bronzer',
  //   tag_list: ['blush', 'bronzer', 'nyx'],
  //   created_at: '2016-10-01T18:36:36.267Z',
  //   updated_at: '2017-12-23T21:08:52.447Z',
  //   product_api_url: 'http://makeup-api.herokuapp.com/api/v1/products/508.json',
  //   api_featured_image:
  //     '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/508/original/open-uri20171223-4-56n3x0?1514063332',
  //   product_colors: [{ hex_value: '#D5838E', colour_name: null }],
  // };

  useEffect(() => {
    MakeupAPI.getProduct(params.id).then(productDetails =>
      setProduct(productDetails)
    );
  }, [params]);

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: 700, display: 'flex', flexDirection: 'column' }}>
        <Box>
          <Button
            startIcon={<KeyboardBackspaceIcon />}
            onClick={() => navigate(location.state?.from || '/products')}
          >
            Back to products
          </Button>
        </Box>
        <Typography variant="h6">{product.name}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src={product.image_link} alt="product" width={300} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: 2,
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography variant="h6">
              Brand: {product.brand?.toUpperCase()}
            </Typography>
            <Typography variant="body1">
              Type: {product.product_type}
            </Typography>
          </Box>
          <Rating value={product.rating || 0} readOnly />
        </Box>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          {product.tag_list?.length ? '#' + product.tag_list?.join(' #') : ''}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6">${product.price}</Typography>
          <Button variant="contained">Add to cart</Button>
        </Box>
        <Typography>{product.description}</Typography>
      </Box>
    </Box>
  );
};

export default ProductDetails;
