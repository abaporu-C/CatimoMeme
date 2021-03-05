module.exports = {
    name: 'leave',
    description: 'leaves current voice channel',
    async execute(message, args, commandName, client){
        await message.member.voice.channel.leave();
    }
}