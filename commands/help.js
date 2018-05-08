module.exports.run = (bot, message, args, discord) => {
 	let categories = ["Bot", "Moderation", "Fun", "Music", "More help", "NSFW"]
	let fun = ["coinflip", "chucknorris", "yomomma", "bork", "advice", "redeem", "google", "knockknock", "meme", "avatar", "snek", "stats", "timer", "whois", "weather"]
	let bota = ["uptime", "ping", "@Hulkbot", "joinserver", "invite", "info", "stats", "listservers", "creators", "help"]
	let mod = ["ban", "hackban", "unhackban", "softban", "kick", "mute", "unmute", "purge"]
	let nsfw = ["pussy", "ass", "boobs", "dick", "fuck"]
	let msg = args.join(" ")
	if (!categories.includes(msg)) return message.channel.send("That's not a category, please enter a valid category.")
	let em = new discord.RichEmbed()
	.setTitle("Help Menu")
	.setFooter(`Requested by ${message.author.username}.`)
	.setColor("RANDOM")
	
	if (msg == categories[4]) {
		em
		.setTitle(":heavy_plus_sign: More help")
		.setDescription("For more help, check out the [command docs](https://gist.github.com/FHGDev/67ed143f693a6424cc4ef7ce9ca3c796)!")
		.addField("Do you *still* need more help? Use the `h!contact` command, and I'll get to you ASAP.")
		
		message.channel.send({embed: em})
	}
	
	if (msg == categories[2]) {
		em
		.setTitle(":lollipop: Fun")
		.setDescription("Let's get some fun going in this boring place!")
		.addField("Fun Commands", `**${fun.join("\n")}**`, true)
		
		message.channel.send({embed: em})
	}
	if (msg == categories[1]) {
		em
		.setTitle("Moderation :hammer_pick:")
		.setDescription("Let me handle the bad bois... Hehe.")
		.addField("Moderation Commands", `**${mod.join("\n")}**`, true)
		
		message.channel.send({embed: em})
	}
	if (msg == categories[0]) {
		em
		.setTitle("Bot :robot:")
		.setDescription(`Get to kno da wae... UMMM I mean the bot.`)
		.addField("Bot Commands", `**${bota.join("\n")}**`, true)
		
		message.channel.send({embed: em})
	}
	if (msg == categories[5]) {
		em
		.setTitle("NSFW :underage:")
		.setDescription(`These commands are *not* for children!`)
		.addField(`NSFW Commands`, `${nsfw.join("\n")}**`, true) 
		
		message.channel.send({embed: em})
	}
	
	if (!msg) {
		em
		.setDescription(`**Use h!help [category] for help on a certain category.**`)
		.setTimestamp()
		.addField("Categories", categories.join("\n"), true)
		
  	message.channel.send({embed: em})
	};
};

module.exports.help = {
  name: "help"
};
