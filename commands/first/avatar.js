const { Command } = require('discord.js-commando');
const { MessageEmbed } = require(`discord.js`);

module.exports = class AvatarCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'avatar',
			aliases: ['icon', 'pfp'],
			group: 'first',
			memberName: 'avatar',
			description: 'Returns users discord avatar',
		});
	}

	run(msg) {

		if(!msg.mentions.users.size){
			var avatarURL = msg.author.displayAvatarURL({ format: 'png', dynamic: true});
			const embed = new MessageEmbed()
				.setAuthor(msg.author.username)
				.setImage(avatarURL)
				.setTimestamp();
			return msg.embed(embed);
		}

		const avatarList = msg.mentions.users.map(user => {
			var avatarURL = user.displayAvatarURL({ format: 'png', dynamic: true});
			const embed = new MessageEmbed()
			.setAuthor(user.username)
			.setImage(avatarURL)
			.setTimestamp();
		return msg.embed(embed);
		});
		
	}
};

