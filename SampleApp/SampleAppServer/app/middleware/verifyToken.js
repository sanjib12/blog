var express         = require("express");
var jwt             = require("jsonwebtoken");
var config          = require("./../../config");
var verifyRouter    = express.Router();

verifyRouter.use(function(req, res, next) {
    var token = req.body.token || req.query.token || req.header['x-access-token'];
    if(token) {
        jwt.verify(token, config.secretKey, function(err, decoded) {
            if(err) {
                return res.status(403).json({
                    error: true,
                    message: "User is not authenticate"
                });
            }
            else {
                req.decoded = decoded;
                next();
            }
        });
    }
    else {
        return res.status(403).json({
                    error: true,
                    message: "User is not authenticate"
                });
    }
});

module.exports = verifyRouter;