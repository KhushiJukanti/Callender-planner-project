const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


const taskRoutes = require('./routes/task')

mongoose.connect('mongodb://localhost:27017/task-calender')


const app = express()

app.use(express.json())
app.use(cors())

app.use('/task', taskRoutes)


app.get('/', function (req, res) {
    res.send("Hello Khushi")
})

app.listen(7000, () => {
    console.log("server is running at port 7000")
})