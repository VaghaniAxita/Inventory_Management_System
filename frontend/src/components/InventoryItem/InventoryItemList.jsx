import React, { useContext, useState } from 'react';
import { InventoryContext } from '../../context/InventoryContext';
import './InventoryItem.css';

const InventoryItemList = () => {
    const { inventory } = useContext(InventoryContext);
    const [search, setSearch] = useState('');

    const filteredInventory = inventory.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="inventory-item-list">
            <input
                type="text"
                placeholder="Search by name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredInventory.map((item) => (
                    <li key={item._id}>
                        {item.name} - {item.quantity} units
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InventoryItemList;
