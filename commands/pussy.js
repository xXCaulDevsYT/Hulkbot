const randomPuppy = require('random-puppy');
const request = require('snekfetch');

module.exports.run = (bot, message, args, discord) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

    var subreddits = [
        'pussy',
        'rearpussy',
        'simps',
        'vagina',
        'MoundofVenus',
        'PerfectPussies',
        'spreading'
    ]
    var sub = subreddits[Math.floor(Math.random() * subreddits.length)];

    randomPuppy(sub)
        .then(url => {
            let embed = new discord.RichEmbed()
            .setTitle("Hulkbot Pussy")
            .setDescription("Alright, here's a pussy pic...")
            .setImage(url)
            .setTimestamp()
            .setFooter(`Requested by ${message.author.username}`)
            message.channel.send({embed: embed})
        })
}

module.exports.help = {
    name: "pussy"
}
