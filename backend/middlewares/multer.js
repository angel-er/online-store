const multer = require('multer');

const upload = multer({
  // dest: 'uploads/',
  limits: {
    fileSize: 10000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      // if (!file.originalname.endsWith('.pdf')) {
      return cb(new Error('File must be a file with the extension provided.'));
    }

    cb(undefined, true);
  },
});

module.exports = upload;
