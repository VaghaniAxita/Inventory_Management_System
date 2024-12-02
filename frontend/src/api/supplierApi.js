import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/suppliers';

export const getAllSuppliers = async () => {
    const response = await axios.get(BASE_URL);
    return response.data.data;
};

export const createSupplier = async (supplier) => {
    const response = await axios.post(BASE_URL, supplier);
    return response.data.data;
};

export const updateSupplier = async (id, supplier) => {
    const response = await axios.put(`${BASE_URL}/${id}`, supplier);
    return response.data.data;
};

export const deleteSupplier = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
};
