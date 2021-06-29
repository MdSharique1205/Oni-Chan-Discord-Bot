const mongo = require('mongoose');

const profileSchema = new mongo.Schema({
    Name : {type : String},
    userID: {type: String, require: true,unique: true},
    serverID: {type: String, require: true},
    Uplay: {type: String,default:'not provided'},
    Valorant : {type: String,default:'not provided'},
    EpicGames : {type: String,default:'not provided'},
    Steam : {type: String,default:'not provided'}

});
const model = mongo.model("ProfileModels",profileSchema);
module.exports = model;