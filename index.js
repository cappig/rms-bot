require('dotenv').config()
const Discord = require('discord.js');

const keepAlive = require('./keepalive.js');
const copypasta = require('./copypasta.js');

const client = new Discord.Client();

//insert code here
client.on('ready', () =>
{
	console.log('Ready');
	client.user.setActivity('SuperTuxKart', {type: "PLAYING"});
});

client.on('message', message =>
{
	if(message.author.id != client.user.id)
	{

		if(includesArray(message.cleanContent, copypasta.doesntlike))
		{
			if(!includesArray(message.cleanContent, copypasta.likes))
			{
				for(var i = 0; i < copypasta.copypasta.length; i++)
				{
					message.reply(copypasta.copypasta[i]);
				}
			}
		}
  }
});

function includesArray(str, arr) //check if the string str contains any element from the array arr
{
	for(var i = 0; i < arr.length; i++)
	{
		if(str.toLowerCase().includes(arr[i].toLowerCase()))
		{
			return true;
		}
	}
	return false;
}

keepAlive();
client.login(process.env.TOKEN);