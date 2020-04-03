const { Client, Collection } = require('discord.js');
const { TOKEN, PREFIX } = require('./config');
const fs = require("fs");
const client = new Client();

client.PREFIX = PREFIX;

client.commands = new Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) return console.err;
    files.forEach(file => {
        if(!file.endsWith(".js")) return undefined;
        const props = require(`./commands/${file}`)
        const cmdName = file.split('.')[0];
        client.commands.set(cmdName, props)
    })

});

client.on("ready", () => require("./events/ready.js")(client));
client.on('message', msg => require("./events/message.js")(client, msg));

client.login(TOKEN);

client.on("error", console.error);
client.on("warn", console.warn);