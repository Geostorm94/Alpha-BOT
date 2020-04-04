const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
    message.delete({timeout: 0})

    if(args[0] == 'bot'){

    const embed = new MessageEmbed()
        .setTitle("Informations du bot")
        .addField("Username", client.user.username, true)
        .addField("Discrim", client.user.discriminator, true)
        .addField("Tag", client.user.tag, true)
        .addField("Prefix", client.PREFIX, true)
        .addField("Statut", client.presence.status, true)
        .addField("Activité", client.user.presence.activities, true)
        .addField("Commandes", "`avatar`, `help`, `infos`, `karma`, `nickname`, `rand`, `rappel`, `scrabble`")
        .addField("Site", "[Dragonium, jeu de rôle en ligne gratuit (WMORPG/MMORPG)](https://dragonium.net)", false)
        .setImage("https://media.discordapp.net/attachments/492586605022806029/696076646314147870/logo.png")
        .setFooter("Dragonium, jeu de rôle en ligne gratuit (WMORPG/MMORPG)")
    message.channel.send(embed)


    } else if(args[0] == 'serveur'){

    const embed = new MessageEmbed()
        .setTitle("Informations du serveur")
        .addField("Nom", message.guild.name, true)
        .addField("Owner", message.guild.owner, true)
        .addField("---------------", "__**Statistiques**__", false)
        .addField("Joueurs", message.guild.members.cache.size, true)
        .addField("Loups", message.guild.roles.cache.find(r => r.name == 'Loup').members.size, true)
        .addField("Griffons", message.guild.roles.cache.find(r => r.name == 'Griffon').members.size, true)
        .addField("Commandes", "`avatar`, `help`, `infos`, `karma`, `nickname`, `rand`, `rappel`, `scrabble`")
        .addField("Site", "[Dragonium, jeu de rôle en ligne gratuit (WMORPG/MMORPG)](https://dragonium.net)", false)
        .setImage("https://media.discordapp.net/attachments/492586605022806029/696076646314147870/logo.png")
        .setFooter("Dragonium, jeu de rôle en ligne gratuit (WMORPG/MMORPG)")
    message.channel.send(embed)

    }
};