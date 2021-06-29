
module.exports={ 
    name : 'create',
    description : 'Used to create an Entry DiscordBot Database',
    async execute (client,message,args,Discord){
            const profileModel = require('../models/profileSchema');
            let profile;
            try{
                profile = await profileModel.findOne({userID: message.author.id});
                if(profile)
                {
                    message.channel.send('```Your profile already exists!```');
                    let user = await client.users.fetch(message.author.id);
                    message.channel.send( '```'+`Name : ${profile.Name}\nUplay: ${profile.Uplay}\nValorant: ${profile.Valorant}\nEpicGames: ${profile.EpicGames}\nSteam: ${profile.Steam}`+'```' );
                }
                else
                {
                    message.channel.send('```Creating new Profile!```');
                    let newprofile  = await profileModel.create({
                        Name: message.author.username,
                        userID: message.author.id,
                        serverID: message.guild.id,
                        Uplay: 'Not provided',
                        Valorant : 'Not provided',
                        EpicGames : 'Not provided',
                        Steam : 'Not provided'
                    });

                    newprofile.save();
                    let user = await client.users.fetch(message.author.id);
                    message.channel.send( '```'+`Name : ${newprofile.Name}\nUplay: ${newprofile.Uplay}\nValorant: ${newprofile.Valorant}\nEpicGames: ${newprofile.EpicGames}\nSteam: ${newprofile.Steam}`+'```' );

                    message.channel.send('```To set platform ids use command ~set```');
                }
                
            }catch(err){
                console.log(err);
            }
    }
}
