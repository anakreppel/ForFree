const photos = require('../middlewares/upload');

const upload = async (req, res) => {
  try {
    await photos(req, res);
    if (req.file === undefined) {
      return res.status(400).json({ message: "Please upload a file" })
    }
    res.status(201).json({
      imgName: req.file.originalname,
      imgPath: `${__dirname}/../public/images/${req.file.originalname}`
    });
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
}
module.exports = upload;