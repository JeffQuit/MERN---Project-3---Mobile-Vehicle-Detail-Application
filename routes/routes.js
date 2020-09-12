
module.exports = function(app){
    // Our model controllers (rather than routes)
    const users = require('./routes');
    
    const authCheckMiddleware = require('./config/middleware/authCheck');
    app.use('/api/admin/login', authCheckMiddleware);

    app.use('/api/admin/login', users);

}