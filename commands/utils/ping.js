module.exports = {
    name: 'ping',
    description: 'test command',
    execute(message, client){
        message.reply('pong!')
    }
}