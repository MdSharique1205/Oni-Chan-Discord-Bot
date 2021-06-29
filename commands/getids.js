const profileModel = require('../models/profileSchema');

module.exports={
    name : 'getids',
    description : 'Used to display all stored ids of a platform',
    async execute(client,message,args,Discord){
        Valid =(plat)=>{
            return(plat==='Uplay'||plat==='Valorant'||plat==='Steam'||plat==='EpicGames');
        }
        // message.channel.send('```Oni-Chan Bot is working```');
        if(args.length==0)
            message.channel.send('```'+'Enter in the following format:\n ~getids paltform'+'```');
        else{
            none = true;
            for(let plat of args)
            {
                
                if(Valid(plat))
                {
                    let docs = await profileModel.find();
                    // console.log(docs);
                    message.channel.send('```'+`Platform - ${plat}`+'```');
                    docs.forEach(function (doc){
                        
                        if(doc[plat]!='Not provided')
                        {
                            none = false;
                            message.channel.send('```'+`${doc.Name} : ${doc[plat]}`+'```');
                        }
                    });
                }
                else
                {
                    message.channel.send('```Please enter valid gaming platform\nEnter from the following: \n'+
                'Uplay, EpicGames, Steam, Valorant'+'```');
                }
            }
            if(none)
            message.channel.send('```No members are registered in that account```');
        }
    }
}