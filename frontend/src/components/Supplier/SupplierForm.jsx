import React, { useState, useContext } from 'react';
import { createSupplier } from '../../api/supplierApi';
import { SupplierContext } from '../../context/SupplierContext';
import './Supplier.css';

const SupplierForm = () => {
    const { setSuppliers } = useContext(SupplierContext);
    const [formData, setFormData] = useState({ name: '', contact: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newSupplier = await createSupplier(formData);
            setSuppliers((prev) => [...prev, newSupplier]);
            setFormData({ name: '', contact: '' });
            alert('Supplier saved!');
        } catch (error) {
            console.error('Error saving supplier:', error);
        }
    };

    return (
        <form className="supplier-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Supplier Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Contact Details"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                required
            />
            <button type="submit">Save Supplier</button>
        </form>
    );
};

export default SupplierForm;
