const { MessageEmbed } = require('discord.js');

exports.run = (client, message) => {
    const embed = new MessageEmbed()
        .setTitle("Liste des commandes")
        .addField("`avatar` → **" + client.PREFIX + "avatar** _{@Pseudo}_", "Affiche l'avatar de l'utilisateur mentionné")
        .addField("`help` → **" + client.PREFIX + "help**", "Affiche la liste des commandes")
        .addField("`karma` → **" + client.PREFIX + "karma** _{loup / griffon}_", "Permet de définir son karma")
        .addField("`nickname` → **" + client.PREFIX + "nickname** _{Pseudo}_", "Permet de modifier son pseudonyme")
        .addField("`rand` → **" + client.PREFIX + "rand**", "Effectue un jet de dé à 100 faces")
        .addField("`scrabble` → **" + client.PREFIX + "scrabble**", "Distribue des lettres afin de former un mot")
        .setFooter("Dragonium, jeu de rôle en ligne gratuit (WMORPG/MMORPG)")
    message.channel.send(embed)
};