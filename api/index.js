require('dotenv').config()
const express = require('express')
const app = express()

const cors = require('cors')
const router = require('./routes/Index')
require('./db/db.js')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/', router)



const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server runing on PORT: ${PORT}`)
})
