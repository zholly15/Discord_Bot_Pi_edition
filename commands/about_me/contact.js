const { Command } = require('discord.js-commando');

module.exports = class ContactCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'contact',
			group: 'about_me',
			memberName: 'contact',
			description: 'How to reach the dev',
		});
	}

	run(message) {
		return message.say('https://zholly15.me/');
	}
};