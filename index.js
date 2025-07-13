// server/index.js
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const itemRoutes = require('./routes/itemRoutes')

const app = express()
const PORT = 5000

// Middleware
app.use(cors())
app.use(bodyParser.json())

// MongoDB connection
connectDB()

// Routes
app.use('/api/items', itemRoutes)

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
