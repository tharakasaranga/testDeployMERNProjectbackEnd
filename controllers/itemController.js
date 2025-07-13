const Item = require('../models/Item')

exports.getItems = async (req, res) => {
  const items = await Item.find()
  res.json(items)
}

exports.createItem = async (req, res) => {
  const { name } = req.body
  const newItem = new Item({ name })
  await newItem.save()
  res.json(newItem)
}

exports.updateItem = async (req, res) => {
  const { id } = req.params
  const { name } = req.body
  const updated = await Item.findByIdAndUpdate(id, { name }, { new: true })
  res.json(updated)
}

exports.deleteItem = async (req, res) => {
  const { id } = req.params
  await Item.findByIdAndDelete(id)
  res.json({ message: 'Item deleted' })
}
