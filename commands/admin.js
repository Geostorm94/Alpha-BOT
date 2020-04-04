exports.run = (client, message, args) => {
    message.delete({timeout: 0})

    if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return message.reply("tu ne peux pas effectuer cette commande !").then(msg => msg.delete({timeout: 0}))
    
    
    // Commande `bot`
    if(args[0] == 'bot') {
        let msg = message.content.split(client.PREFIX + 'admin ' + args[0] + ' ')
        message.channel.send(msg)
    }
};