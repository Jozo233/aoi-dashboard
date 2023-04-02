const path = require('path');

module.exports = (app, params) => {
    const bot = params.bot;

    function isLoggin (res, req, next) {

    }

    require("./Assets/Images")(app,params)
    require("./Dashboard/Owner/manageAdmin")(app,params,isLoggin)

}