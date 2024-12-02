import React, { useState, useContext } from 'react';
import { createInventoryItem } from '../../api/inventoryApi';
import { InventoryContext } from '../../context/InventoryContext';
import './InventoryItem.css';

const InventoryItemForm = () => {
    const { setInventory } = useContext(InventoryContext);
    const [formData, setFormData] = useState({
        name: '',
        quantity: 0,
        category: '',
        supplier: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newItem = await createInventoryItem(formData);
            setInventory((prev) => [...prev, newItem]);
            setFormData({ name: '', quantity: 0, category: '', supplier: '' });
            alert('Item saved!');
        } catch (error) {
            console.error('Error saving item:', error);
        }
    };

    return (
        <form className="inventory-item-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Item Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
            />
            <input
                type="number"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: +e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            />
            <input
                type="text"
                placeholder="Supplier ID"
                value={formData.supplier}
                onChange={(e) => setFormData({ ...formData, supplier: e.target.value })}
            />
            <button type="submit">Save Item</button>
        </form>
    );
};

export default InventoryItemForm;
