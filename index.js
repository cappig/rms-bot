const fs = require('fs')
const Discord = require('discord.js');
const client = new Discord.Client();

//insert code here
client.on('ready', () => {
	console.log('Ready');
});
	
console.log('Reading token file...');
fs.readFile('./.token', 'utf8', function(err, data)
{
	if(err)
	{
		console.log('Something bad happened :(');
		if(err.code = 'ENOENT')
		{
			console.log('Couldn\'t read the .token file. Make sure it exists, and contain your bot\'s token.');
		}
		return 1
	}
	console.log('Trying to log-in...');
	console.log('Using token: ' + data);
	client.login(data);
});
