var routeApi = require('./userApi');

module.exports = function (app) {
    app.use('/userApi', routeApi);
}