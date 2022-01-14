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
    const extension = item.image;
    item.image = " ";
    console.log('image', item.image);
    const savedItem = await Item.create(item);
    const img = `${__dirname}/../public/images/` + savedItem._id + '.' + extension;
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
