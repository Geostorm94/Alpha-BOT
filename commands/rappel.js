exports.run = (client, message, args) => {

   if(!message.guild.member(message.author).roles.cache.find(r => r.id == '696104351189434519')) message.guild.member(message.author).roles.add('696104351189434519').then(message.reply("je t'enverrai un MP tous les jours à minuit pour te rappeler la roue de la fidélité. N'oublies pas d'activer tes MPs ! :wink:"))
    else message.guild.member(message.author).roles.remove('696104351189434519').then(message.reply("tu viens de désactiver les notifications pour la roue de la fidélité. Je ne t'enverrai plus de MP !"))
};