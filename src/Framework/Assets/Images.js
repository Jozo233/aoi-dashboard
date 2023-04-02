const path = require('path');

module.exports = (app, params) => {

    app.get('/logo.png', async (req, res) => {
        const logo = path.join(__dirname, "/assets/logo.png");
        res.sendFile(logo)
    })

    app.get('/guild.png', async (req, res) => {
        const guild = path.join(__dirname, "/assets/guild.png");
        res.sendFile(guild)
    })
 

    
}