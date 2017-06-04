const fs = require('fs')
const copypasta = require('./copypasta.js');
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
			console.log('Couldn\'t read the .token file. Make sure it exists, it should contains your bot\'s token.');
		}
		return 1;
	}
	console.log('Trying to log-in...');
	console.log('Using token: ' + data);
	client.login(data);
});

function includesArray(str, arr) //check if the string str contains any element from the array arr
{
	for(var i = 0; i < arr.length; i++)
	{
		if(arr[i].toLowerCase().includes(str.toLowerCase()))
		{
			return true;
		}
	}
	return false;
}
