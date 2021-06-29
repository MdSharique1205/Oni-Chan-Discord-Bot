module.exports={
    name : 'ping',
    description : 'Used to check if bot is responding',
    execute(client,message,args,Discord){
        message.channel.send('```Oni-Chan Bot is working```');
    }
}