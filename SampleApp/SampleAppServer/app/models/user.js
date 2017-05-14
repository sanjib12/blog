var db      = require("./../db/executeQuery");
var moment  = require("moment");

module.exports = {
    table : "user",

    isUniqueUser: function(user) {
        var sql = "SELECT COUNT( * ) AS total FROM " + this.table + " WHERE user_email = '" + user.email + "'";
        console.log(sql);
        return db.query(sql).then(function(data) {
            return data;
        }, function(data) {
            return data;
        });
    },

    getUsers: function() {
        var sql = "SELECT * FROM " + this.table; 
        return db.query(sql);
    },

    getUser: function(user) {
        var sql = "SELECT user_id, user_email, name, user_activate, user_register_date, user_last_login, user_type FROM " + this.table;
        sql += " WHERE 1 = 1";
        if(user.id) {
            sql += " AND user_id = " + user.id;
        }
        if(user.email) {
            sql += " AND user_email = '" + user.email + "'";
        }
        if(user.password) {
            sql += " AND password = '" + user.password + "'";
        }
       
        return db.query(sql).then(function(data) {
            if(data) {
                return data;
            }
            else {
                throw new Error([404, "user not found"]);
            }
        }, function(data) {
            return data;
        })
    },

    save: function(user) {
        console.log(user);
    },

    create: function(user) {
        user.registerDate = moment().format('YYYY-MM-DD HH:mm:ss');
        user.lastLogin = moment().format('YYYY-MM-DD HH:mm:ss');
        user.type = "NORMAL";
        var that = this;
        return this.isUniqueUser(user).then(function(data) {
            if(data && !data[0].total) {
                var sql = "INSERT INTO " + that.table + " ( user_email, name, password, user_register_date, user_last_login, user_type )";
                sql += " VALUES ( '" + user.email + "','" + user.name + "','" + user.password + "','" + user.registerDate + "','" + user.lastLogin + "','" + user.type + "' ) ";
                console.log(sql);
                return db.query(sql);
            }
            else {
                throw new Error([422, "user is already available"]);
            }
        }, function(data) {
            return data;
        });
        
    },

    deleteUser: function(user) {
        console.log(req.decoded);
    }
};