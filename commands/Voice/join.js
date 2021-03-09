const fs = require('fs');
const {aliases} = require('../../joinAliases.json')

module.exports = {
    name: 'join',
    description: 'joins voice channel',
    aliases: aliases,
    async execute(message, args, commandName){

        const voiceChannel = await message.member.voice.channel;
        if(!voiceChannel) return message.reply('You have to be on a voice channel to call this command!');

        const connection = await voiceChannel.join();

        if(commandName && commandName !== 'join'){
            const sound = await fs.createReadStream(__dirname.replace('\\commands\\utils', "") + `\\audio\\${commandName}_sound.mp3`);
            await connection.play(sound, {seek: 0, volume: 0.3});
        }
    }
}