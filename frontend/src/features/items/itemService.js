import axios from 'axios'

const API_URL = '/api/items/'
// create items
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
    throw error.response?.data?.message || error.message || 'Failed to create item'
  }
}
// get user items
const getItems = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  try {
    const response = await axios.get(API_URL, config);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || error.message || 'Failed to display items'
  }
}

const itemService = {
  createItem,
  getItems,
}

export default itemService
