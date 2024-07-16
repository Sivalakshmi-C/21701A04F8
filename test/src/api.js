import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; 

export const fetchProducts = async (category, company, minRating, priceRange, availability) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products,{
      params: { category, company, minRating, priceRange, availability }
    }`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductDetail = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product detail:', error);
    throw error;
  }
};