let mongoose = require('mongoose');

//mongoose.connect('mongodb://username:password@port.mlab.com:15446/databasename', { useMongoClient: true }); //mongodb://localhost:27017/crud
//mongoose.connect('mongodb://localhost:27017/test', { useMongoClient: true }); //mongodb://localhost:27017/crud

//local
//mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true }); //mongodb://localhost:27017/crud


//en linea
mongoose.connect('mongodb+srv://dbcrudag:i0qMxmUNupL94aHl@dbcluster-wpa9k.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }); //heroku

module.exports = mongoose;