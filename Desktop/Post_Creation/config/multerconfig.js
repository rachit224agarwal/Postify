const multer = require('multer'); //use for uploading images , videos
const path = require('path'); 
const crypto = require('crypto');   //use for generating random bytes here filename

//disk storage 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/uploads')
    },
    filename: function (req, file, cb) {
      crypto.randomBytes(12,(err,buffer) => {
        const fn = buffer.toString('hex')+path.extname(file.originalname)
        cb(null, fn);
      });
    }
  })
  
  const upload = multer({ storage: storage })

// export upload variable
module.exports = upload;