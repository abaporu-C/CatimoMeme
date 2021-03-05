const fs = require('fs');

module.exports = {
    name: 'join',
    description: 'joins voice channel',
    aliases: ['nani'],
    async execute(message, args, commandName, client){

        const voiceChannel = await message.member.voice.channel;
        if(!voiceChannel) return message.reply('You have to be on a voice channel to call this command!');

        const connection = await voiceChannel.join();

        if(commandName === 'nani'){
            nani(connection);
        }
    }
}

const nani = async (connection) => {
    const sound = fs.readFileSync('../../audio/nani/nani_sound.mp3');
    connection.play(sound, { type: mp3 });
}