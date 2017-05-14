module.exports = {
    secretKey : "sampleappserver", //json web token secret key
    port: process.env.port || 9097,
    dbConfig: {
        host: "localhost",
        user: 'root',
        password: '',
        dbName: 'usermanagement'
    }
};