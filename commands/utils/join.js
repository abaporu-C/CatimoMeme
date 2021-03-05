const fs = require('fs');

module.exports = {
    name: 'join',
    description: 'joins voice channel',
    aliases: ['nani', 'duel', 'barrel', 'weed', 'wow', 'xfile', 'acabou', 'no'],
    async execute(message, args, commandName, client){

        const voiceChannel = await message.member.voice.channel;
        if(!voiceChannel) return message.reply('You have to be on a voice channel to call this command!');

        const connection = await voiceChannel.join();

        if(commandName){
            const sound = await fs.createReadStream(__dirname.replace('\\commands\\utils', "") + `\\audio\\${commandName}\\${commandName}_sound.mp3`);
            await connection.play(sound, {seek: 0, volume: 0.5});
        }
    }
}