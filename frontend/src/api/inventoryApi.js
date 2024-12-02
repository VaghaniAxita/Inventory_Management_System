import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/inventory';

export const getAllInventory = async () => {
    const response = await axios.get(BASE_URL);
    return response.data.data;
};

export const createInventoryItem = async (item) => {
    const response = await axios.post(BASE_URL, item);
    return response.data.data;
};

export const updateInventoryItem = async (id, item) => {
    const response = await axios.put(`${BASE_URL}/${id}`, item);
    return response.data.data;
};

export const deleteInventoryItem = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
};
