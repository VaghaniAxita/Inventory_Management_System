import React, { useContext } from 'react';
import { SupplierContext } from '../../context/SupplierContext';
import './Supplier.css';

const SupplierList = () => {
    const { suppliers } = useContext(SupplierContext);

    return (
        <div className="supplier-list">
            <h2>Suppliers</h2>
            <ul>
                {suppliers.map((supplier) => (
                    <li key={supplier._id}>
                        {supplier.name} - {supplier.contact}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SupplierList;
