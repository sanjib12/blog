var connection  = require("./../db");
var q           = require("q");

module.exports = {
    getConnection : function() {
        var defer = q.defer();
        connection.connect( function(err) {
            if(!err) {
                defer.resolve({
                    message: "Connection Established..."
                });                
            } else {
                defer.reject({
                    message: "Connection not Established..."
                })
            }
        });
        return defer.promise;
    },

    endConnection: function() {
        var defer = q.defer();
        connection.end(function(err) {
            if(err){
                defer.reject({
                    message: "Connection not able to close"
                })
            }
            else {
                defer.resolve({
                    message: "Connection is closed"
                });
            }
        });
        return defer.promise;
    },

    query: function(sql) {
        return connection.then(function(conn) {
            return conn.query(sql).then(function(rows) {
                return rows;
            });
        });       
        
    }
    
}



