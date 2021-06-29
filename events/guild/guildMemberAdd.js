module.exports = (Discord,client,guildMember)=>{
    let wel_role = guildMember.guild.roles.cache.find(role => role.name==='Member');
    guildMember.roles.add(wel_role);
    // let user = await client.users.fetch(message.author.id);
    guildMember.guild.channels.cache.get('858796669159342110').send('```'+`Welcome ${guildMember.displayName} to our server.\nMake sure to share all your Game-Ids with the bot\nType ~help for more details.`+'```');
};