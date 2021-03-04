const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
require('dotenv').config();

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const commandFolders = fs.readdirSync('./commands')

client.commands = new Discord.Collection();

for(const event of eventFiles){
    if (event.once){
        client.once(event.name, (...args) => event.execute(...args, client))
    }
    else {
        client.on(event.name, (...args) => event.execute(...args, client))
    }
}

for(const folder of commandFolders){
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('js'));
    for(const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    } 
}

client.login(process.env.DISCORD_TOKEN);
