module.exports = async (client, message) => {

    if(message.channel.name == "règlement" || message.channel.name == "informations" && message.author.id == "369301863113293834"){
        message.delete({timeout: 0})
        message.channel.send(message.content)
        message.channel.stopTyping(1)
    }

    if(message.author.bot) return;
    if(message.content.indexOf(client.PREFIX) !== 0) return;

    const args = message.content.slice(client.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command);

    if(!cmd) return undefined;
    cmd.run(client, message, args);

    
}
