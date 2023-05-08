require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const db = mongoose.connection

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
db.once('open', () => console.log("Connected to Database!"))
db.on('error', (error) => console.error(error))

app.listen(port, () => console.log("Server Started"))
app.use(express.json())