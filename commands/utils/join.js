const fs = require('fs');

module.exports = {
    name: 'join',
    description: 'joins voice channel',
    aliases: ['nani', 'duel'],
    async execute(message, args, commandName, client){

        const voiceChannel = await message.member.voice.channel;
        if(!voiceChannel) return message.reply('You have to be on a voice channel to call this command!');

        const connection = await voiceChannel.join();

        if(commandName === 'nani'){
            nani(connection);
        }
        if(commandName === 'duel'){
            duel(connection);
        }
    }
}

const nani = async (connection) => {
    const sound = await fs.createReadStream(__dirname.replace('\\commands\\utils', "") + '\\audio\\nani\\nani_sound.mp3');
    console.log(sound.path);
    await connection.play(sound, {seek: 0, volume: 0.5});
}

const duel = async (connection) => {
    const sound = await fs.createReadStream(__dirname.replace('\\commands\\utils', "") + '\\audio\\duel\\duel_sound.mp3');
    console.log(sound.path);
    await connection.play(sound, {seek: 0, volume: 0.5});
}