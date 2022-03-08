const explain_me = require("explain_me")

// // make sure all your files in src folder are commented. 
// // sets up package.json 
explain_me.addScript("test_waters")
    //     // adds scripts for compile, build, adds babel and webpack to folder
explain_me.makeGlobal("test_waters")
    //     // run after you are finished 
explain_me.readme("test_waters")
    //     // removes js doc.json and replaces it with module name and video
    //     // runs command for you 
explain_me.html("test_waters")
    //     // exports module from dist 
explain_me.addIndex("test_waters")
    // explain_me.copyHTML("test_waters")