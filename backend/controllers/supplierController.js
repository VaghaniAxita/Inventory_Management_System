const Supplier = require('../models/Supplier');


exports.createSupplier = async (req, res) => {
    try {
        const { name, contact } = req.body;

        const newSupplier = new Supplier({ name, contact });
        await newSupplier.save();

        res.status(201).json({ success: true, data: newSupplier });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


exports.getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.status(200).json({ success: true, data: suppliers });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


exports.getSupplierById = async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id);
        if (!supplier) {
            return res.status(404).json({ success: false, message: 'Supplier not found' });
        }
        res.status(200).json({ success: true, data: supplier });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


exports.updateSupplier = async (req, res) => {
    try {
        const { name, contact } = req.body;

        const updatedSupplier = await Supplier.findByIdAndUpdate(
            req.params.id,
            { name, contact },
            { new: true, runValidators: true }
        );

        if (!updatedSupplier) {
            return res.status(404).json({ success: false, message: 'Supplier not found' });
        }

        res.status(200).json({ success: true, data: updatedSupplier });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


exports.deleteSupplier = async (req, res) => {
    try {
        const deletedSupplier = await Supplier.findByIdAndDelete(req.params.id);
        if (!deletedSupplier) {
            return res.status(404).json({ success: false, message: 'Supplier not found' });
        }

        res.status(200).json({ success: true, message: 'Supplier deleted successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
