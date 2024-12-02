const express = require('express');
const {
    createSupplier,
    getAllSuppliers,
    getSupplierById,
    updateSupplier,
    deleteSupplier,
} = require('../controllers/supplierController');
const { authenticate } = require('../middlewares/auth');

const router = express.Router();

router.post('/', authenticate, createSupplier);
router.get('/', authenticate, getAllSuppliers);
router.get('/:id', authenticate, getSupplierById);
router.put('/:id', authenticate, updateSupplier);
router.delete('/:id', authenticate, deleteSupplier);

module.exports = router;
