const express = require('express');
const { 
  getAllSuppliers, 
  getSupplierById, 
  createSupplier, 
  updateSupplier, 
  deleteSupplier 
} = require('../controllers/supplierController');

const router = express.Router();

router.get('/', getAllSuppliers); // Get all suppliers
router.get('/:id', getSupplierById); // Get a single supplier by ID
router.post('/', createSupplier); // Create a new supplier
router.put('/:id', updateSupplier); // Update an existing supplier
router.delete('/:id', deleteSupplier); // Delete a supplier

module.exports = router;
