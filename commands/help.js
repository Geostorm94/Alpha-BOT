const { MessageEmbed } = require('discord.js');

exports.run = (client, message) => {
    const embed = new MessageEmbed()
        .setTitle("Liste des commandes")
        .addField("`avatar` → **" + client.PREFIX + "avatar** _{@Pseudo}_", "Affiche l'avatar de l'utilisateur mentionné")
        .addField("`help` → **" + client.PREFIX + "help**", "Affiche la liste des commandes")
        .addField("`infos` → **" + client.PREFIX + "infos** _{bot / serveur}_", "Affiche les informations du bot ou du serveur")
        .addField("`karma` → **" + client.PREFIX + "karma** _{loup / griffon}_", "Permet de définir son karma")
        .addField("`nickname` → **" + client.PREFIX + "nickname** _{Pseudo}_", "Permet de modifier son pseudonyme")
        .addField("`rand` → **" + client.PREFIX + "rand** _{Nombre}_", "Effectue un jet de dé. _(2: pile/face | 3: chifoumi | 4+: jet de dés)_")
        .addField("`rappel` → **" + client.PREFIX + "rappel**", "Vous permet de recevoir un message chaque jour à minuit pour vous rappeler de tourner la roue. Activez vos MPs !")
        .addField("`scrabble` → **" + client.PREFIX + "scrabble**", "Distribue des lettres afin de former un mot")
        .setFooter("Dragonium, jeu de rôle en ligne gratuit (WMORPG/MMORPG)")
    message.channel.send(embed)
};