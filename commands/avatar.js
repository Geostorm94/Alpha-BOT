const { MessageEmbed } = require('discord.js');



exports.run = (client, message) => {
    message.delete({timeout: 0})
    
    var UserAvatar = message.mentions.users.first();
    if(!UserAvatar) { UserAvatar = message.author }

    const embed = new MessageEmbed()
        .setDescription("Avatar de **" + UserAvatar.tag + "**")
        .setImage(message.guild.member(UserAvatar).user.avatarURL({ dynamic: true }))
    message.channel.send(embed)
    
};