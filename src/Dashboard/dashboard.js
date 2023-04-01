const express = require("express")
const session = require('express-session');
const path = require('path')
const fs = require('fs')
const bodyParser = require("body-parser")


const util = require("../utilFunc.js")

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


    }
}

module.exports = {

    Dashboards
}