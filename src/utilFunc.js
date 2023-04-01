const fetch = require("node-fetch")

async function checkVersion() {


    const data = await fetch('https://registry.npmjs.com/@Jozo_85/aoi-dashboard').then(r => r.json());
    let c_version = require('../package.json').version
    if (c_version.includes("dev")===true) return console.log("[Aoi-Dashboard] Používáš dev verzi");
    let l_version = data["dist-tags"].latest;
    if (c_version !== l_version) {
      console.log("[Aoi-Dashboard] Nepoužíváš nejnovější verzi");
    }
  
  }

  function checkPackage() {

    let c_name = require('../package.json').name;
    
    if (c_name !== "@Jozo_85/aoi-dashboard") {
      console.log("[Aoi-Dashboard] Nepoužíváš správnou verzi");
    }
  
  }  

module.exports = {
    checkVersion,
    checkPackage
}  
  