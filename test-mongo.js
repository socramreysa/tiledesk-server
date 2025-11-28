require('dotenv').config();
const mongoose = require('mongoose');

console.log('MONGODB_URI =', process.env.MONGODB_URI);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000,
  })
  .then(() => {
    console.log('✅ Conectado a Mongo desde test-mongo.js');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Error conectando a Mongo:', err);
    process.exit(1);
  });
