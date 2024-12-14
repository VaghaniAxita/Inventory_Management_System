const express = require('express');
const { 
  getAllItems, 
  getItemById, 
  createItem, 
  updateItem, 
  deleteItem, 
  importCSV, 
  exportCSV 
} = require('../controllers/inventoryController');

const router = express.Router();

router.get('/', getAllItems);
router.get('/:id', getItemById);
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);
router.post('/import', importCSV);
router.get('/export', exportCSV);

module.exports = router;
