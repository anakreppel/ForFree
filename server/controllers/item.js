const Item = require('../models/item');


const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    console.log("getItems");
    res.send(items);
    res.status(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
}

getOneItem = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("oneItem");
    const found = await Item.findById(id);
    res.send(found);
    res.status(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
}


const postItem = async (req, res) => {
  try {
    const item = req.body;
    const extension = item.image;
    item.image = " ";
    console.log('image', item.image);
    const savedItem = await Item.create(item);
    const img = `http://localhost:5000/images/${savedItem._id}.${extension}`;
    console.log('img', img);
    const updatedItem = await Item.findByIdAndUpdate(savedItem._id, { image: `${img}` }, { new: true });
    console.log('update', updatedItem);
    res.send(updatedItem);
    res.status(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
}

const updateItem = async (req, res) => {
  try {
    const id = req.params.id;
    console.log('updadte')
    const item = req.body;
    const updatedItem = await Item.findByIdAndUpdate(id, { image: `${item.image}` }, { new: true });
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
    console.log("delete");
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = { getItems, getOneItem, postItem, updateItem, deleteItem };
