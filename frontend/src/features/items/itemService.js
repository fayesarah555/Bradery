import axios from 'axios';

const API_URL = '/api/items/';

const createItem = async (itemData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(API_URL, itemData, config);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || error.message || 'Failed to create item';
  }
};

const itemService = {
  createItem,
};

export default itemService;
