
module.exports = (client) => {

    client.user.setActivity({
        type: 'PLAYING',
        name: 'dragonium.net',
        url: 'https://dragonium.net'
    });
    console.log("Je suis prêt !")


    // Définition de l'heure pour la roue
var timeHours = 0;
var timeMinutes = 0;
var timeSeconds = 0;

setInterval(function(){
    let heure = new Date()

    if(heure.getHours() == timeHours && heure.getMinutes() == timeMinutes && heure.getSeconds() == timeSeconds){
        var Members = client.guilds.cache.array()[0].roles.cache.get('696104351189434519').members.array() 

        for(x = 0; x < Members.length; x++){
            Members[x].send("C'est l'heure de tourner la roue de la fidélité !")
        }
    }

}, 1000)

}