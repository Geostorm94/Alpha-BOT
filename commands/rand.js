
exports.run = (client, message) => {
    message.delete({timeout: 0})
    function random(min, max){
        min = Math.ceil(0);
        max = Math.floor(100);
        randnum = Math.floor(Math.random() * (max - min +1)+ min);
    
    }
    random()

    message.channel.send("**" + message.guild.member(message.author).displayName + "** _lance les dés. Il obtient :_ **`" + randnum + "/100`**")
    
};