const fs = require("fs");
const path = require('path');


module.exports = (app, isLoggin, params) => {
    app.get('/owner/admin/list' , isLoggin, function(req, res) {


    })

    app.post('/v1/owner/AddAdmin&{ApiKey}')
}