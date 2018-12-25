const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "=";

client.on('ready', () => {
    console.log('Elindult!');
    client.user.setStatus("dnd");
    client.user.setGame('GTA: New Generation');
});

client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(prefix)) return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(' ')[0];
	command = command.slice(prefix.length);
	
	if(command === "teszt") {
		if(!args[1]) return;
		let str = args[1];
		let id = str.replace(/[<@!>]/g, '');

		msg.channel.sendMessage("Ping, pong!");
		msg.delete(1);
	}	
	return undefined;
});

client.on("message", (message) => {
	if (message.channel.type === "dm") {
		if(message.author.username == "GTA New Generation") return; 
		client.users.get("312631597222592522").send(message.author + " üzenete: " + message.content);
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
