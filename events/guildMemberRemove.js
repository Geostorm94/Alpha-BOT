module.exports = (client, member) => {

    member.guild.systemChannel.send("📤 **" + member.user.tag + "** vient de quitter le serveur !")
    
}