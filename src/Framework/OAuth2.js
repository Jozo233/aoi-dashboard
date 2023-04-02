const crypto = require('crypto')

const DiscordOauth2 = require("discord-oauth2");

module.exports = (app, params) => {

    const oauth = new DiscordOauth2({
        clientId: params.clientId,
        clientSecret: params.clientSecret,
        redirectUri: params.url 
    });


    this.oauth=oauth;
    console.log(oauth)





}