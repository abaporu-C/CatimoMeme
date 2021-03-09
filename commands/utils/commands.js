module.exports = {
    name: 'commands',
    description: 'list all commands',
    execute(message, args, commandName, client){
        const aliases = require('../voice/join').aliases
        let reply = "Here is a list of all CatimoMeme's commands:\n\n";
        let count = 1;

        for(let name of aliases){
            reply += `${count++}- #${name}\n`;
        }

        for(let command of client.commands){
            reply += `${count++}- #${command[0]}\n`
        }

        message.channel.send(reply);
    }
}