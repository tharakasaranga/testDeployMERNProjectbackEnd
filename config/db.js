// server/config/db.js
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://tharakasaranga:K20sQSckUZmsuMSc@merncrudcluster1.fytlhrn.mongodb.net/mern_crud_db?retryWrites=true&w=majority&appName=MERNCrudCluster1')
    console.log('✅ MongoDB connected')
  } catch (err) {
    console.error('❌ MongoDB connection error:', err)
    process.exit(1)
  }
}

module.exports = connectDB
