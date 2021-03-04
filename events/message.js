module.exports = {
    name: 'message',
    once: false,
    execute(message, client){
        const {prefix} = require('../config.json');
        if(message.member.user.bot || !message.content.startsWith(prefix)) return;
        
        const args = message.content.slice(prefix.length).split(/ +/);
        const commandName = args.shift().toLowerCase();

        if(!client.commands.has(commandName) && !client.commands.find(a => a.aliases && a.aliases.includes(commandName))) return;
        
        const command = client.commands.get(commandName) || client.commands.find(a => a.aliases && a.aliases.includes(commandName));

        if(command.args && !args.length){
            message.reply("You didn't provide any arguments")
        }

        try{
            command.execute(message, args, commandName, client)
        }
        catch(err) {
            console.log(err);
            message.reply('There was an error calling this command.');
        }
    }
}