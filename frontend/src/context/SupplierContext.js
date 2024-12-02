import React, { createContext, useState, useEffect } from 'react';
import { getAllSuppliers } from '../api/supplierApi';

export const SupplierContext = createContext();

export const SupplierProvider = ({ children }) => {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        fetchSuppliers();
    }, []);

    const fetchSuppliers = async () => {
        try {
            const data = await getAllSuppliers();
            setSuppliers(data);
        } catch (error) {
            console.error('Error fetching suppliers:', error);
        }
    };

    return (
        <SupplierContext.Provider value={{ suppliers, setSuppliers }}>
            {children}
        </SupplierContext.Provider>
    );
};
