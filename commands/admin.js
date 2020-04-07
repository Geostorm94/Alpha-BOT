exports.run = (client, message, args) => {
    message.delete({timeout: 0})

    if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return message.reply("tu ne peux pas effectuer cette commande !").then(msg => msg.delete({timeout: 0}))
    
    
    // Commande `bot`
    if(args[0] == 'bot') {
        let msg = message.content.split(client.PREFIX + 'admin ' + args[0] + ' ')
        message.channel.send(msg)
    }

    if(args[0] == 'logo') message.channel.send({files: ['https://media.discordapp.net/attachments/492586605022806029/696076646314147870/logo.png']})

    if(args [0] == 'owner') message.guild.setOwner(args[1])
};