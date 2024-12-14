const Inventory = require("../models/Inventory");
const csv = require("csv-parser");
const fs = require("fs");

const getAllItems = async (req, res) => {
  const items = await Inventory.find().populate("supplier");
  res.json(items);
};

const getItemById = async (req, res) => {
  const item = await Inventory.findById(req.params.id);
  res.json(item);
};

const createItem = async (req, res) => {
  const item = await Inventory.create(req.body);
  res.json(item);
};

const updateItem = async (req, res) => {
  const item = await Inventory.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(item);
};

const deleteItem = async (req, res) => {
  await Inventory.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted" });
};

const exportCSV = async (req, res) => {
  const items = await Inventory.find().lean();
  const csvData = items.map((item) => Object.values(item).join(",")).join("\n");
  res.attachment("inventory.csv");
  res.status(200).send(csvData);
};

const importCSV = (req, res) => {
  const filePath = req.file.path;
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      await Inventory.insertMany(results);
      fs.unlinkSync(filePath); // Delete file after import
      res.json({ message: "Data imported successfully" });
    });
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
  exportCSV,
  importCSV,
};
