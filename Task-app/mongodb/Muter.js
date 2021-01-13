const multer = require('multer');
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.endsWith('jpg')) {

            return cb(new Error("please upload jpg file"));

        }
        cb(undefined, true)

    }
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send();
}, (error, req, res, next) => {
    res.status(400).send({
        error: error.message
    })
})
