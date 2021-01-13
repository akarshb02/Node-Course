const express = require('express')
const User = require('../module/user')
const router = new express.Router()
const multer = require('multer')
const upload = multer({
    // dest: 'avatar',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {

            return cb(new Error("upload proper format"))

        }
        cb(undefined, true);
    }
})
router.post('/user', async(req, res) => {
    const user = new User(req.body)


    try {
        await user.save()
        res.status(200).send(user)
    } catch (e) {
        res.status(400).send(e)

    }
    // user.save().then((user) => {
    //     console.log(user);
    // }).catch((error) => {
    //     res.status(400).send(error)

    // })
})
router.post('/user/avatar', upload.single('avatar'), async(req, res) => {
    const avatar = req.file.buffer;
    await req.user.save();
    res.send(avatar);
}, (error, req, res, next) => {
    res.status(500).send({
        error: error.message
    })

})

router.get('/user', async(req, res) => {

    try {

        const user = await User.find({})
        res.send(user)


    } catch (e) {
        res.status(500).send(e)
    }





    // User.find({}).then((value) => {
    //     res.send(value);
    // }).catch((e) => {
    //     console.log(e);
    // })

})
router.get('/user/:id', async(req, res) => {

    const _id = req.params.id;
    try {
        const use = await User.findById(_id)
        if (!use) {
            return res.status(404).send()
        }
        res.send(use)
    } catch (e) {
        res.status(500).send()
    }



})
router.patch('/user/:id', async(req, res) => {
    const updates = Object.keys(req.body)
    const allow = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allow.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: "invalid " })
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!user) {
            return res.status(404).send();
        }
    } catch {
        res.status(400).send();
    }

})

router.delete('/user/:id', async(req, res) => {

    // try {
    //     const user = await User.findByIdAndDelete(req.params.id)

    //     if (!user) {
    //         return res.status(404).send("invalid")
    //     }
    //     res.send(user)
    // } catch (e) {
    //     res.status(500).send(e)
    // }
    console.log(id);


})
router.post('/user/login', async(req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAut()
        res.send({ user, token })
        res.status(200).send(user)
    } catch (e) {
        res.status(400).send(e)

    }
})


module.exports = router;
