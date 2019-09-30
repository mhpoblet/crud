const express = require('express');
path = require('path');
bodyParser = require('body-parser');
cors = require('cors'),
mongoose = require('mongoose');


var db = 'mongodb://localhost:27017/User';


const app = express();

mongoose.Promise = global.Promise;

mongoose.connect(db, { userNewUrlParser: true}).then(
  () => { console.log('connected')}, err => { console.log(err)}
);

const userRoutes = require('../routes/info.route');

app.use(bodyParser.json());
app.use(cors());


const port = process.env.PORT || 4000;

app.use('/users', userRoutes);

const server = app.listen(port, function () {
 console.log('Server Lisening On Port : ' + port);
});
