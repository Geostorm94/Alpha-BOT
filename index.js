const { Client, Collection, MessageEmbed } = require('discord.js');
const { TOKEN, PREFIX } = require('./config');
const fs = require("fs");
const client = new Client();
require("dotenv").config();

client.login(process.env.TOKEN);

client.PREFIX = '!';

client.commands = new Collection();

fs.readdir("./events/", (err, files) => {

    if(err) return console.err;
    files.forEach(file => {
        if(!file.endsWith(".js")) return undefined;
        const event = require(`./events/${file}`)
        const eventName = file.split('.')[0];
        client.on(eventName, event.bind(null, client));
    })
    
});

fs.readdir("./commands/", (err, files) => {

    if(err) return console.err;
    files.forEach(file => {
        if(!file.endsWith(".js")) return undefined;
        const props = require(`./commands/${file}`)
        const cmdName = file.split('.')[0];
        client.commands.set(cmdName, props)
    })

});