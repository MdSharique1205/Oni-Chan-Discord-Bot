module.exports={
    name : 'help',
    description : 'Used to display all bot commands',
    execute(client,message,args,Discord){
        message.channel.send('```'+
        '~create : To create a profile containg platform ids' +
        '\n~show : To show platform ids of a member'+
        '\n~set : To change platform ids of your account'+
        '\n~ping : To check if bot is working'+
        '\n~choose : To randomly choose an item from a list'+
        '\n~getids : To display all known ids of a platform'+
        '```');
    }
}