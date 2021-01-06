const express = require('express')
const router = new express.Router()
const Task = require('../module/task')

router.post('/tasks', async(req, res) => {
    const task1 = new Task(req.body);

    try {
        await task1.save()
        res.status(200).send(task1)
    } catch (e) {
        res.status(400).send(e)
    }

    // task1.save().then(() => {
    //     res.send(task1)
    // }).catch((error) => {
    //     res.status(400).send(error)
    // })
})

router.patch('/tasks/:id', async(req, res) => {

    const updates = Object.keys(req.body)
    const allow = ['description', 'content']
    const isValidOperation = updates.every((update) => allow.includes(update))

    if (!isValidOperation) {
        res.status(404).send({ error: "invalid operation" })
    }

    try {
        const task = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.status(404).send();
        }
    } catch {
        res.status(400).send();

    }
})

router.delete('/tasks/:id', async(req, res) => {

    try {
        const task = await Task.findByIdAndDelete(req.body.id)
        if (!task) {
            res.status(404).send()
        }
        res.send(task)

    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router;
