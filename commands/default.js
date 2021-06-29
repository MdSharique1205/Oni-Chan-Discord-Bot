module.exports={
    name : 'default',
    description : 'When user types crap',
    execute(client,message,args,Discord){
        message.channel.send('```I dont\'t know this command\nType ~help for commands```');
    }
}