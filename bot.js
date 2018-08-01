console.log('listo');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on ('message', (message) => {
	if (message.content == 'hola') {
		message.channel.sendMessage('Hola :D');
	}
});
bot.login('NDY4NTEzNDA4NjAyNjAzNTIw.Di6Q9A.b7I9e0P1W1BzQ_AvtQqHBauPjDc');
