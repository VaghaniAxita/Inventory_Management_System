const express = require('express');
const {
    createInventory,
    getAllInventory,
    getInventoryById,
    updateInventory,
    deleteInventory,
    getLowStockItems,
    exportInventoryCSV,
    importInventoryCSV,
} = require('../controllers/inventoryController');
const { authenticate } = require('../middlewares/auth');

const router = express.Router();

router.post('/', authenticate, createInventory);
router.get('/', authenticate, getAllInventory);
router.get('/:id', authenticate, getInventoryById);
router.put('/:id', authenticate, updateInventory);
router.delete('/:id', authenticate, deleteInventory);
router.get('/low-stock', authenticate, getLowStockItems);
router.get('/export', authenticate, exportInventoryCSV);
router.post('/import', authenticate, importInventoryCSV);

module.exports = router;
