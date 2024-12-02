import React from 'react';
import { InventoryProvider } from './context/InventoryContext';
import { SupplierProvider } from './context/SupplierContext';
import InventoryDashboard from './components/InventoryDashboard/InventoryDashboard';
import InventoryItemForm from './components/InventoryItem/InventoryItemForm';
import InventoryItemList from './components/InventoryItem/InventoryItemList';
import SupplierForm from './components/Supplier/SupplierForm';
import SupplierList from './components/Supplier/SupplierList';

function App() {
    return (
        <InventoryProvider>
            <SupplierProvider>
                <div>
                    <InventoryDashboard />
                    <InventoryItemForm />
                    <InventoryItemList />
                    <SupplierForm />
                    <SupplierList />
                </div>
            </SupplierProvider>
        </InventoryProvider>
    );
}

export default App;
