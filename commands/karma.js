
exports.run = async (client, message) => {

    const msg = message.content.split(' ')
    const usr = message.guild.member(message.author)

    if(msg[1] === "loup") {

        message.delete({timeout: 0})

        if(usr.roles.cache.find(r => r.name === 'Loup')) return message.reply("tu as déjà ce rôle !").then(mess => mess.delete({timeout: 5000}))
        if(usr.roles.cache.find(r => r.name === 'Griffon')) usr.roles.remove('547477315219750921')
        
        await usr.roles.add('547476805288722443')
        message.reply("tu as obtenu le rôle `Loup` !").then(mess => mess.delete({timeout: 15000}))
    }

    if(msg[1] === "griffon") {

        message.delete({timeout: 0})

        if(usr.roles.cache.find(r => r.name === 'griffon')) return message.reply("tu as déjà ce rôle !").then(mess => mess.delete({timeout: 5000}))
        if(usr.roles.cache.find(r => r.name === 'Loup')) usr.roles.remove('547476805288722443')
        
        await usr.roles.add('547477315219750921')
        message.reply("tu as obtenu le rôle `Griffon` !").then(mess => mess.delete({timeout: 15000}))
    }
};