import { Box, Typography } from '@mui/material';
import React from 'react';

const ProductDetails = () => {
  /** @type {import('services/MakeupAPI').MakeupResponse} */
  const product = {
    id: 508,
    brand: 'nyx',
    name: 'NYX Mosaic Powder Blush Paradise',
    price: '10.49',
    price_sign: null,
    currency: null,
    image_link:
      'https://d3t32hsnjxo7q6.cloudfront.net/i/deedb7bd74bda43f062a09aab2ee1ec8_ra,w158,h184_pa,w158,h184.png',
    product_link:
      'https://well.ca/products/nyx-mosaic-powder-blush-paradise_106230.html?cat=328',
    website_link: 'https://well.ca',
    description:
      'NYX Mosaic Powder Blush is a medley of that creates a flush of color and dazzling glow for every skin tone. Features:Five shades in one palette, this blush is bright pink with gold shimmerWorks as blush and highlighterFlattering on every skin toneUse to highlight, enhance \u0026 brighten Each mosaic of color blends beautifully with magical results',
    rating: 5.0,
    category: null,
    product_type: 'bronzer',
    tag_list: [],
    created_at: '2016-10-01T18:36:36.267Z',
    updated_at: '2017-12-23T21:08:52.447Z',
    product_api_url: 'http://makeup-api.herokuapp.com/api/v1/products/508.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/508/original/open-uri20171223-4-56n3x0?1514063332',
    product_colors: [{ hex_value: '#D5838E', colour_name: null }],
  };
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ minWidth: 600 }}>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body1">{product.brand.toUpperCase()}</Typography>
        <img src={product.image_link} alt="product" width={300} />
        <Typography variant="body1">
          {product.tag_list?.length ? '#' + product.tag_list?.join(' #') : ''}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductDetails;