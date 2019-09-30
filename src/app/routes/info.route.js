var express = require('express');

const app = express();
const userRoute = express.Router();

var userM = require('../model/User');

userRoute.route('/').get(function (req,res) {
  userM.find(function (err, user){
    if (err) { console.log(err);}
    else { res.json(user);}
    });
});

userRoute.route('/edit/:id').get(function (req,res) {
var id = req.params.id;
  userM.findById(id, function (err, user){
    res.json(user);
    });
});


userRoute.route('/add').post(function (req,res) {
  var user = new userM(req.body);
  user.save()
  .then(game => {
    res.json(user);
    res.status(200).json({'user': 'user added'});
  })
  .catch(err => {
    res.status(400).send("tf");
  });
});

userRoute.route('/delete/:id').get(function (req,res) {
  userM.findByIdAndRemove({_id: req.params.id }, function(err, user) {
    if (err) res.json(err);
    else {
      res.json('deleted');
    }
    });
});


userRoute.route('/update/:id').get(function (req,res){
  userM.findById(req.params.id, function(err, user){
    if (!user) {
      return next(new Error('nuh uh'));
    }
    else {
      user.name = req.body.name;
      user.email = req.body.email;
      user.birthday = req.body.birthday;
      user.zipcode = req.body.zipcode;

      user.save().then(use => {
        res.json('updated');
      })
      .catch(err => {
        res.status(400).send("unable");
      });
    }
  });
});


module.exports = userRoute;
