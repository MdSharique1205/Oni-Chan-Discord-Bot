
const profileModel = require('../models/profileSchema');

module.exports={
    name : 'show',
    description : 'Used to display profiles of a member',
    async execute(client,message,args,Discord){
        try{
        let flag = true;
        // console.log(args);
        for(let id of args)
        {
            flag=false;
            let temp="";
            for(let i=0;i<id.length;i++)
            {
                if(id[i]>='0'&&id[i]<='9')
                    temp+=id[i];
            }
            id=temp;
            // console.log(id);
            let user = await client.users.fetch(id);
            // console.log(user);
            // console.log(user.username);
            let profile = await profileModel.findOne({userID: id});
            // console.log(profile);
            if(!profile)
                message.channel.send('```'+`Profile of ${user.username} does not exist`+'```');
            else
                message.channel.send( '```'+`Name : ${profile.Name}\nUplay: ${profile.Uplay}\nValorant: ${profile.Valorant}\nEpicGames: ${profile.EpicGames}\nSteam: ${profile.Steam}`+'```' );
        }
        if(flag)
            message.channel.send('```Use the format ~show @Username```')
        }catch(err){
            console.log(err);
        }
    }
}