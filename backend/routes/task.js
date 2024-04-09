const express = require('express');
const router = express.Router();
const TaskModel = require('../models/Task');
const mongoose = require('mongoose')


// create a task

router.post('/create', async function (req, res) {
    const newtaskData = new TaskModel({ ...req.body })
    const createdTask = await newtaskData.save();
    res.send(createdTask)
})
router.get('/all', async function (req, res) {
    let tasks = await TaskModel.find({})
    res.send(tasks)
})



module.exports = router; 