var nombre = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"];
var nb_tirage = [];
var timer;
var bingo_etat = 0;

exports.run = (client, message, args) => {
    message.delete({timeout: 0})

    if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return message.reply("tu ne peux pas effectuer cette commande !").then(msg => msg.delete({timeout: 0}))
    
    if(!args) return message.reply("veuillez préciser une sous-commande : `start` | `stop` | `remove` | `tirage`.")

    // Commande `bot`
    if(args[0] == 'start') {
        message.channel.send("▶️ **Le bingo va commencer ! Nous vous demandons le silence SVP !**") 
        
        bingo_etat = 1;
            timer = setInterval(function() {
                function shuffle(nombre) {
                    for (let i = nombre.length; i; i--) {
                        let j = Math.floor(Math.random() * i);
                            [nombre[i - 1], nombre[j]] = [nombre[j], nombre[i - 1]];
                                
                        }
                    }
                        shuffle(nombre);
                        if(!nombre[0]) {
                            message.channel.send("⏹️ Le tirage est terminé !")
                        } else {
                        message.channel.send("Le numéro : **" + nombre[0] + "** !")
                        nb_tirage.push(nombre[0])
                        nombre.shift()
                        }
        
                    }, 7500)
    }

    if(args[0] == 'stop') {
        clearInterval(timer)
        message.channel.send("⏸️ Le bingo est interrompu !")
        bingo_etat = 2;

    }

    if(args[0] == 'remove') {
        bingo_etat = 0;
        message.channel.send("↩️ Le bingo a été réinitialisé !")
        nb_tirage = []
        nombre = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"];

    }

    if(args[0] == 'tirage') {
        message.channel.send("<a:load:696189362878021693> Vérification en cours !")

        let nb_bw = args[1]
        var result = [];
        for(x = 0; x < nb_tirage.length; x++){
            if(nb_tirage[x] == nb_bw) result.push("✅ Le chiffre **" + nb_bw + "** est sorti !\n");
        }

        if(!result[0]) message.channel.send(":x: La grille n'est pas correcte !")
        else message.channel.send(result)
        } 
    
};