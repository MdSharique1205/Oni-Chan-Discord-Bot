const profileModel = require('../models/profileSchema');
module.exports={
    name : 'set',
    description : 'Used to set account id',
    async execute(client,message,args,Discord){
        // console.log(args[0]);
        // console.log(args[1]);
        const profile = await profileModel.findOne({userID: message.author.id});
        if(!profile)
            message.channel.send('```Your profile does not exist, for more bot commands type ~help```');
        
        else if(args.length!=2)
            message.channel.send('```Please enter according to input format\n~set <platform> <id>```');
        
        else{
            switch(args[0])
            {
                case 'Uplay':profile.Uplay = args[1];
                    message.channel.send('```'+`Your ${args[0]} has been set to ${profile.Uplay}`+'```');
                    break;
                case 'EpicGames':profile.EpicGames = args[1];
                    message.channel.send('```'+`Your ${args[0]} has been set to ${profile.EpicGames}`+'```');
                    break;
                case 'Steam':profile.Steam = args[1];
                    message.channel.send('```'+`Your ${args[0]} has been set to ${profile.Steam}`+'```');
                    break;
                case 'Valorant':profile.Valorant = args[1];
                    message.channel.send('```'+`Your ${args[0]} has been set to ${profile.Valorant}`+'```');
                    break;
                default:message.channel.send('```Please enter valid gaming platform\nEnter from the following: \n'+
                'Uplay, EpicGames, Steam, Valorant'+'```');
                    break;
            }
            profile.save();
        
        }
        // console.log(profile);
    }
}