// server/controllers/itemController.js
const Item = require('../models/Item')

// GET all
exports.getItems = async (req, res) => {
  const items = await Item.find()
  res.json(items)
}

// POST create
exports.createItem = async (req, res) => {
  const { name } = req.body
  const newItem = new Item({ name })
  await newItem.save()
  res.json(newItem)
}

// PUT update
exports.updateItem = async (req, res) => {
  const { id } = req.params
  const { name } = req.body
  const updated = await Item.findByIdAndUpdate(id, { name }, { new: true })
  res.json(updated)
}

// DELETE
exports.deleteItem = async (req, res) => {
  const { id } = req.params
  await Item.findByIdAndDelete(id)
  res.json({ message: 'Item deleted' })
}
