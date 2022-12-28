import axios from 'axios';

const shazamApi = axios.create({
  baseURL: 'http://makeup-api.herokuapp.com/api/v1/products.json',
});

/** @param {MakeupQueryParams} params */
export const searchMakeupProducts = async (params = {}) => {
  const response = await shazamApi.get('', { params });

  return response.data;
};

/**
 * @typedef {Object} MakeupQueryParams
 * @property {string[]} product_tags
 * @property {string} brand
 * @property {string} category
 * @property {number} price_greater_than
 * @property {number} price_less_than
 * @property {number} rating_greater_than
 * @property {number} rating_less_than
 */

const tagList = [
  'Canadian',
  'CertClean',
  'Chemical Free',
  'Dairy Free',
  'EWG Verified',
  'EcoCert',
  'Fair Trade',
  'Gluten Free',
  'Hypoallergenic',
  'Natural',
  'No Talc',
  'Non-GMO',
  'Organic',
  'Peanut Free Product',
  'Sugar Free',
  'USDA Organic',
  'Vegan',
  'alcohol free',
  'cruelty free',
  'oil free',
  'purpicks',
  'silicone free',
  'water free',
];

const brandsList = [
  'Select brand',
  'almay',
  'alva',
  'anna sui',
  'annabelle',
  'benefit',
  'boosh',
  "burt's bees",
  'butter london',
  "c'est moi",
  'cargo cosmetics',
  'china glaze',
  'clinique',
  'coastal classic creation',
  'colourpop',
  'covergirl',
  'dalish',
  'deciem',
  'dior',
  'dr. hauschka',
  'e.l.f.',
  'essie',
  'fenty',
  'glossier',
  'green people',
  'iman',
  "l'oreal",
  'lotus cosmetics usa',
  "maia's mineral galaxy",
  'marcelle',
  'marienatie',
  'maybelline',
  'milani',
  'mineral fusion',
  'misa',
  'mistura',
  'moov',
  'nudus',
  'nyx',
  'orly',
  'pacifica',
  'penny lane organics',
  'physicians formula',
  'piggy paint',
  'pure anada',
  'rejuva minerals',
  'revlon',
  "sally b's skin yummies",
  'salon perfect',
  'sante',
  'sinful colours',
  'smashbox',
  'stila',
  'suncoat',
  'w3llpeople',
  'wet n wild',
  'zorah',
  'zorah biocosmetiques',
];

const typesList = [
  'Blush',
  'Bronzer',
  'Eyebrow',
  'Eyeliner',
  'Eyeshadow',
  'Foundation',
  'Lip liner',
  'Lipstick',
  'Mascara',
  'Nail polish',
];

const categoryList = {
  Blush: ['Powder', 'Cream'],
  Bronzer: ['Powder'],
  Eyebrow: ['Pencil'],
  Eyeliner: ['Cream', 'Gel', 'Liquid', 'Pencil'],
  Eyeshadow: ['', 'Palette', 'Pencil', 'Cream'],
  Foundation: [
    'Bb cc',
    'Concealer',
    'Contour',
    'Cream',
    'Highlighter',
    'Mineral',
    'Powder',
  ],
  'Lip liner': ['Pencil'],
  Lipstick: ['Lipstick', 'Lip gloss', 'Liquid', 'Lip stain'],
  Mascara: [''],
  'Nail polish': [],
};

const categories = [
  'Bb cc',
  'Concealer',
  'Contour',
  'Cream',
  'Gel',
  'Highlighter',
  'Lipstick',
  'Lip gloss',
  'Liquid',
  'Lip stain',
  'Mineral',
  'Palette',
  'Pencil',
  'Powder',
  '',
];

/**
@typedef {{
    id: number,
    brand: string,
    name: string,
    price: string,
    price_sign: string,
    currency: string,
    image_link: string,
    product_link: string,
    website_link: string,
    description: string,
    rating: number,
    category: string,
    product_type: string,
    tag_list: string[],
    created_at: string,
    updated_at: string,
    product_api_url: string,
    api_featured_image: string,
    product_colors: { hex_value: string, colour_name: string }[]
}} MakeupResponse
 */
