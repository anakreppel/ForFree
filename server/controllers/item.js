const Item = require('../models/item');


const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.send(items);
    res.status(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
}

const postItem = async (req, res) => {
  try {
    const item = req.body;
    const savedItem = await Item.create(item);
    res.send(savedItem);
    res.status(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
}

const updateItem = async (req, res) => {
  try {
    const id = req.params.id;
    const item = req.body;
    const updatedItem = await Item.findByIdAndUpdate({ _id: id }, item);
    res.send(updatedItem);
    res.status(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
}

const deleteItem = async (req, res) => {
  try {
    await Item.deleteOne({ _id: req.params.id });
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = { getItems, postItem, updateItem, deleteItem };
