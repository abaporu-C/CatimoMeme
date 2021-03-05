module.exports = {
    name: 'join',
    description: 'joins voice channel',
    aliases: ['nani'],
    async execute(message, commandName, client){

        const voiceChannel = await message.member.voice.chanel
        const connection = voiceChannel.join();
        if(!voiceChannel) return message.reply('You have to be on a voice channel to call this command!');

        if(commandName === 'join'){
            voiceChannel.join();
        }
        if(commandName === 'nani'){
            const nani = require('../memes/nani.js');
            nani.execute(message, connection);
        }
    }
}