
require('dotenv').config();
module.exports = (Discord,client)=>{
    console.log(`Oni-Chan is online`);
    client.user.setActivity(process.env.PREFIX+'help');
}