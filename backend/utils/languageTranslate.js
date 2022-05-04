var { translate } = require("google-translate-api-browser");

exports.translateString = async(line)=>{
    try{
        if(typeof line == "string"){
            let translation=await translate(line, { to: "en" });
            return translation.text;
        }
        else{
            throw new Error("Not a String")
        }
        
    }
    catch(err){
        throw err.message;
    }
}
  
