module.exports = {
    name: 'leave',
    description: 'leaves current voice channel',
    async execute(message){
        await message.member.voice.channel.leave();
    }
}