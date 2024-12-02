import React, { createContext, useState, useEffect } from 'react';
import { getAllInventory } from '../api/inventoryApi';

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchInventory();
    }, []);

    const fetchInventory = async () => {
        try {
            const data = await getAllInventory();
            setInventory(data);
        } catch (error) {
            console.error('Error fetching inventory:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <InventoryContext.Provider value={{ inventory, setInventory, loading }}>
            {children}
        </InventoryContext.Provider>
    );
};
