var express    = require("express");
var openRouter = express.Router();
var userRouter = require("./user");
var User       = require("./../models/user");
var jwt        = require("jsonwebtoken");
var config     = require("./../../config"); 
var authToken  = require("./../middleware/verifyToken");

openRouter.get("/", function(req, res) {
    res.status(200)
    .json({
        "message": "Congratulations!! you can use now this application"
    });
});

openRouter.post("/api/signup", function(req, res) {
    var user = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
    };

    User.create(user).then(function(data) {
        if(data) {
            res.status(201);
            res.json({
                error: false
            });
        }        
    }, function(err) {
        if(err.message) {
            err = err.message.split(","); 
        }
        res.status(err[0])
        .json({
            error: true,
            message: err[1]
        })
    });
});

openRouter.post("/api/authenticate", function(req, res) {
    var user = {
        email: req.body.email,
        password: req.body.password
    };
    User.getUser(user).then(function(data) {
        if(data) {
            var token = jwt.sign(data[0], config.secretKey, {
                expiresIn: 1440
            });
            res.status(200).json({
                error: false,
                token: token
            });
        }
    }, function(data) {

    });
});

openRouter.use("/api/users", authToken, userRouter);
module.exports = openRouter;