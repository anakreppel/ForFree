const util = require('util');
const multer = require('multer');

const maxSize = 2 * 1024 * 1024;
const path = __dirname + '/../public/images'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path);
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  }
})

const uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('only .png, .jpg and .jpeg format allowed!'))
    }
  }
}).single("img");


const photos = util.promisify(uploadFile);

module.exports = photos