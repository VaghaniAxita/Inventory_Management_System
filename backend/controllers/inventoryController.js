const Inventory = require('../models/Inventory');
const Supplier = require('../models/Supplier');
const { exportCSV, importCSV } = require('../utils/csvHandler');
const path = require('path');


exports.createInventory = async (req, res) => {
    try {
        const { name, quantity, supplier, lowStockThreshold } = req.body;
        
        
        const supplierExists = await Supplier.findById(supplier);
        if (!supplierExists) {
            return res.status(404).json({ success: false, message: 'Supplier not found' });
        }

        const item = new Inventory({ name, quantity, supplier, lowStockThreshold });
        await item.save();
        res.status(201).json({ success: true, data: item });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


exports.getAllInventory = async (req, res) => {
    try {
        const items = await Inventory.find().populate('supplier');
        res.status(200).json({ success: true, data: items });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


exports.getInventoryById = async (req, res) => {
    try {
        const item = await Inventory.findById(req.params.id).populate('supplier');
        if (!item) {
            return res.status(404).json({ success: false, message: 'Inventory item not found' });
        }
        res.status(200).json({ success: true, data: item });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


exports.updateInventory = async (req, res) => {
    try {
        const { name, quantity, supplier, lowStockThreshold } = req.body;

    
        if (supplier) {
            const supplierExists = await Supplier.findById(supplier);
            if (!supplierExists) {
                return res.status(404).json({ success: false, message: 'Supplier not found' });
            }
        }

        const updatedItem = await Inventory.findByIdAndUpdate(
            req.params.id,
            { name, quantity, supplier, lowStockThreshold },
            { new: true, runValidators: true }
        );

        if (!updatedItem) {
            return res.status(404).json({ success: false, message: 'Inventory item not found' });
        }

        res.status(200).json({ success: true, data: updatedItem });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


exports.deleteInventory = async (req, res) => {
    try {
        const item = await Inventory.findByIdAndDelete(req.params.id);
        if (!item) {
            return res.status(404).json({ success: false, message: 'Inventory item not found' });
        }
        res.status(200).json({ success: true, message: 'Inventory item deleted successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


exports.getLowStockItems = async (req, res) => {
    try {
        const items = await Inventory.find({ quantity: { $lt: '$lowStockThreshold' } });
        res.status(200).json({ success: true, data: items });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


exports.exportInventoryCSV = async (req, res) => {
    try {
        const items = await Inventory.find();
        const csvData = exportCSV(items);

        res.header('Content-Type', 'text/csv');
        res.attachment('inventory.csv');
        res.send(csvData);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


exports.importInventoryCSV = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No file uploaded' });
        }

        const filePath = path.join(__dirname, '../uploads', req.file.filename);
        const data = await importCSV(filePath);

        
        const operations = data.map((row) => ({
            updateOne: {
                filter: { name: row.name },
                update: row,
                upsert: true,
            },
        }));

        await Inventory.bulkWrite(operations);

        res.status(200).json({ success: true, message: 'Inventory imported successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
