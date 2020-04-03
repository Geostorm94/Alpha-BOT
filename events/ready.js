
module.exports = (client) => {

    client.user.setActivity({
        type: 'PLAYING',
        name: 'dragonium.net',
        url: 'https://dragonium.net'
    });
    console.log("Je suis prêt !")
}