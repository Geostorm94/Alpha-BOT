module.exports = (client, member) => {


    if(member.user.bot) return;

    member.guild.systemChannel.send("**" + member.user.tag + "** vient d'arriver sur le serveur !")
}