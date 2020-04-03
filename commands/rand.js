
exports.run = (client, message, args) => {
    message.delete({timeout: 0})

    var rand = message.content.split(' ').slice(1);
    
    
    if(rand[0] > 100) return message.reply("le dé ne peut pas être supérieur à 100 !").then(msg => msg.delete({timeout: 20000}))
    if(rand[0] < 2 && rand[0]) return message.reply("échec critique ! La valeur ne peut pas être inférieure à 2 !").then(msg => msg.delete({timeout: 20000}))
    if(!rand[0]) rand = 100;


    if(rand[0] == 2){
    
    function random(min, max){
        min = Math.ceil(1);
        max = Math.floor(2);
        randnum = Math.floor(Math.random() * (max - min +1)+ min);
    
    }
    random()

    if(randnum == 1) randnum = 'Pile';
    else if(randnum == 2) randnum = 'Face';

    message.channel.send("**" + message.guild.member(message.author).displayName + "** _joue à Pile ou Face. Il obtient :_ **`" + randnum + "`**")
    
} else if(rand[0] == 3){


    function random(min, max){
        min = Math.ceil(1);
        max = Math.floor(3);
        randnum = Math.floor(Math.random() * (max - min +1)+ min);
    
    }
    random()

    if(randnum == 1) randnum = 'Pierre';
    else if(randnum == 2) randnum = 'Feuille';
    else if(randnum == 3) randnum = 'Ciseaux';

    message.channel.send("**" + message.guild.member(message.author).displayName + "** _joue à Chifoumi. Il obtient :_ **`" + randnum + "`**")
    

} else {

    function random(min, max){
        min = Math.ceil(1);
        max = Math.floor(rand);
        randnum = Math.floor(Math.random() * (max - min +1)+ min);
    
    }
    random()

    console.log(rand)
    message.channel.send("**" + message.guild.member(message.author).displayName + "** _lance les dés. Il obtient :_ **`" + randnum + "/" + rand + "`**")
    
}


};