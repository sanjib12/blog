var express     = require("express");
var userRouter  = express.Router();
var User        = require("./../models/user");

userRouter.get("/", function(req, res) {    
    User.getUsers().then(function(data) {
        if(data) {
            res.status(200);
            res.json({
                user: data
            })
        }
    }, function(err) {
        res.status(500);
        res.json({
            message: err
        })
    })
});

userRouter.get("/:id", function(req, res) {
    var user = {
        id: req.params.id
    };
    User.getUser(user).then(function(user) {
        if(user) {
            res.status(200).json({
                user: user[0]
            });
        }
    })
});

userRouter.delete("/:id", function(req, res) {
    var user = {
        id: req.params.id
    };
    User.deleteUser(user);
});

userRouter.put("/:id", function(req, res) {
    var user = {
        id: req.params.id
    };
    User.deleteUser(user);
});

module.exports = userRouter;