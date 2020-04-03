module.exports = (client, member) => {

    if(member.user.bot) return;

    member.guild.systemChannel.send("📤 **" + member.user.tag + "** vient de quitter le serveur !")
}