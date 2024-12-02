import React, { useContext } from 'react';
import { InventoryContext } from '../../context/InventoryContext';
import './InventoryDashboard.css';

const InventoryDashboard = () => {
    const { inventory, loading } = useContext(InventoryContext);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="dashboard">
            <h1>Inventory Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Supplier</th>
                        <th>Stock Level</th>
                    </tr>
                </thead>
                <tbody>
                    {inventory.map((item) => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.category || 'N/A'}</td>
                            <td>{item.supplier?.name || 'N/A'}</td>
                            <td>
                                <span
                                    className={
                                        item.quantity < item.lowStockThreshold
                                            ? 'low-stock'
                                            : 'sufficient-stock'
                                    }
                                >
                                    {item.quantity < item.lowStockThreshold ? 'Low' : 'Sufficient'}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InventoryDashboard;
