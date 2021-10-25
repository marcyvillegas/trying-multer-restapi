const path = require('path');
const multer = require('multer');


    // Handles where the image should be store
    // you can also change the file name and file extension here
    const imageStorage = multer.diskStorage({
        // Destination to store image     
        destination: 'images',
        filename: (req, file, callback) => {
            callback(
                null, // error message
                `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}` // file name
            )
        }
        // file.fieldname -> field name of the input - <input name="image">
        // file.originalname -> file name (kasama file extension)
        // path.extname() extracts the extension from file name
    });


    // Handles the 
    const imageUpload = multer({
        storage: imageStorage, // we just set the storage to imageStorage
        limits: {
            fileSize: 5_000_000 // 1 million Bytes = 1 MB
        },
        fileFilter(req, file, callback) {
            if (!file.originalname.match(/\.(png|jpg)$/)) {
                // upload only png and jpg format
                return callback(new Error('Please upload a valid Image'))
            }
            callback(null, true)
            // first argument is error
            // 2nd is if it accepts file - true/false
        }
    });

    module.exports = {
        imageStorage,
        imageUpload
    }