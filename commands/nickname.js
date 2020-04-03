exports.run = (client, message) => {
    message.delete({timeout: 0})

    const msg = message.content.split(' ')
    const usr = message.guild.member(message.author)

    if(!message.member.hasPermission('CHANGE_NICKNAME')) return undefined;
    message.member.setNickname(msg[1])
};