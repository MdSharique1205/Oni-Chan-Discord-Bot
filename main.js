const Discord = require('discord.js');
const fs = require('fs');
const mongo = require('mongoose');
require('dotenv').config();
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler','event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client,Discord);
})      
mongo.connect(process.env.MONGODB_SRV,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{
    console.log('Connected to Database!');
}).catch((err)=>{
    console.log(err);
});
// console.log(client);
// Last line
client.login(process.env.ONICHAN_TOKEN);