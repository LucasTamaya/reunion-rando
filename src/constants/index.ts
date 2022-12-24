const productionMode = process.env.NODE_ENV === 'production';

export const SERVER_BASE_URL = productionMode
  ? 'https://reunion-rando-backend.onrender.com'
  : 'http://localhost:4000';
