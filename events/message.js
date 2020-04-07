module.exports = async (client, message) => {

    if(message.channel.name == "règlement" || message.channel.name == "informations" && message.author.id == "369301863113293834"){
        message.delete({timeout: 0})
        message.channel.send(message.content)
        message.channel.stopTyping(1)
    }


    if(!message.content.startsWith(client.PREFIX) && !message.author.username !== "Dragonium" && message.channel.name !== "gaspard" && message.channel.name !== "kirim") {

        if(message.channel.name === "gaspard" || message.author.username === "Gaspard") return message.guild.channels.cache.find(c => c.id == '628779881001386014').send("🔵 [<#" + message.channel + ">] <:Gaspard:594702797795229716> **`Gaspard`** : " + message.content)
        if(message.channel.name === "kirim" || message.author.username === "Kirim") return message.guild.channels.cache.find(c => c.id == '628779833173737474').send("🔴 [<#" + message.channel + ">] <:Kirim:629117975227531265> **`Kirim`** : " + message.content)
        if(message.channel.id === "390715765956804618" || message.channel.id === '477192705001390093' || message.channel.id === '487998591722455070'){

        if(message.guild.member(message.author).roles.cache.find(r => r.id == '547476805288722443')) {

            message.guild.channels.cache.find(c => c.id == '628779881001386014').send("🔵 [<#" + message.channel + ">] **`" + message.guild.member(message.author).displayName + "`** : " + message.content)
            message.guild.channels.cache.find(c => c.id == '628779833173737474').send("🔵 [<#" + message.channel + ">] **`" + message.guild.member(message.author).displayName  + "`** : " + message.content)
        
        } else if(message.guild.member(message.author).roles.cache.find(r => r.id == '547477315219750921')) {
        
            message.guild.channels.cache.find(c => c.id == '628779881001386014').send("🔴 [<#" + message.channel + ">] **`" + message.guild.member(message.author).displayName  + "`** : " + message.content)
            message.guild.channels.cache.find(c => c.id == '628779833173737474').send("🔴 [<#" + message.channel + ">] **`" + message.guild.member(message.author).displayName  + "`** : " + message.content)}
    
        }

    }



    if(message.author.bot) return;
    if(message.content.indexOf(client.PREFIX) !== 0) return;

    const args = message.content.slice(client.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command);

    if(!cmd) return undefined;
    cmd.run(client, message, args);

    
}
