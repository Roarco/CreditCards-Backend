// conexion a la base de datos
const mongoose = require("mongoose");

const username = 'roarco';
const password = '1104017400';
const dbName = 'creaditCards';
const uri = `mongodb+srv://${username}:${password}@cluster0.r5gkvxf.mongodb.net/${dbName}?retryWrites=true&w=majority`;


mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to database!");
    }
    )
.catch((err) => {
    console.log(err);
    }
);

module.exports = mongoose;