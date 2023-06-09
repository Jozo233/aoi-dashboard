const express = require("express")
const path = require('path')
const fs = require('fs')
const bodyParser = require("body-parser")


const util = require("../Util/utilFunc.js")

class Dashboard {
    constructor(params) {
        this.params = params;

        util.checkVersion();
        util.checkPackage();

        console.log("[Aoi-Dashboard] Initializing")
        if(!params.customIndex){
            params.customIndex="";
        }

        if (!params.bot) {
            console.log("[Aoi-Dashboard] Nebyl nalezen aoi.js")
            process.exit(0)
        }

        if(!params.theme){
            console.log("[Aoi-Dashboard] Theme: Black & Red [Default]")
            params.theme="BlackAndRed"
        }

        if (!params.port) {
            console.log("[Aoi-Dashboard] Port není nastaven dashboard je zpuštěn na portu 750")
            params.port = 750
        }

        //Discord OAuth2
        if (!params.client_id) {
            console.log("[Aoi-Dashboard] Client Id není nastaveno")
            process.exit(0)
        }

        if (!params.client_secret) {
            console.log("[Aoi-Dashboard] Client Secret není nastaveno")
            process.exit(0)
        }

        if (!params.url) {
            console.log("[Aoi-Dashboard] Redirect Url není nastavena")
            process.exit(0)
        }

        if (!params.owner_id) {
            console.log("[Aoi-Dashboard] Owner Id není nastaveno")
            process.exit(0)
        }

        if (!params.name) {
            console.log("[Aoi-Dashboard] Jméno není nastaveno")
            params.name = Aoi-Dashboard-Bot
        }


    }

    loadDashboard() {

        const params = this.params;



        const app = express()

        app.engine('html', require('ejs').renderFile);
        app.set('view engine', 'html');
        app.set('views', __dirname + "../Pages");
        
        app.listen(params.port)

        require("../Framework/main.js")(app, params)
        console.log("[Aoi-Dashboard] Dashboard je zpuštěn na portu" + params.port)
        console.log("[Aoi-Dashboard] by Jozo_85 2023")

        this.app = app;




    
    
    }
}


module.exports = {

    Dashboard
}