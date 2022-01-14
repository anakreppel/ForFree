const { Router } = require('express');
const itemController = require('./controllers/item');
const upload = require('./controllers/photos');

const router = new Router();

router.get('/item', itemController.getItems);
router.post('/item', itemController.postItem);
router.post('/item/upload', upload);
router.put('/item/:id', itemController.updateItem);
router.delete('/item/:id', itemController.deleteItem);

module.exports = router;