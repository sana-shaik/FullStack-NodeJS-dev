const mongoose = require('mongoose');
const URI = "mongodb+srv://sanaulla:sana1234@cluster0.r33qq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if(err) throw err;
  console.log('Connected to Mongo DB');
} )

const wSchema = new mongoose.Schema({
  empName: String,
  empPass: String,
  created: {type: Date, default: Date.now()}
}, {
  collection: 'Employees'
})

module.exports = mongoose.model('Employees', wSchema);


// const { MongoClient } = require('mongodb');

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//   const collection = client.db("Employees").collection("employee");

//   // perform actions on the collection object
//   client.close();
// });
