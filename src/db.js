const mongoose = require('mongoose');

function db() {
  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/mjv-database'
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(uri, options);
  const { connection } = mongoose;

  connection.once('open', () => console.log('connection established succesfully!'))
  connection.on('error', err => console.log('something went wrong!'))
};

module.exports = db;