const request = require('snekfetch');

module.exports.run = (bot, message, args, discord) => {
    var max = 5511;
    var min = 1000;
    var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
    var MathLoL = Math.round(MathRan);
    if (!message.channel.nsfw) {
        message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
    } else {
        var randomname = Math.floor(Math.random() * (99999999999999999999 - 11111111111111111111 + 0)) + 11111111111111111111;
        request.get(`https://media.obutts.ru/butts_preview/0${MathLoL}.jpg`).then(r => {  
        let embed = new discord.RichEmbed()
            .setTitle("Hulkbot Ass")
            .setDescription("Alright, here's an ass pic...")
            .setImage(r.body)
            .setFooter(`Requested by ${message.author.username}`)
            .setTimestamp()
            message.channel.send({embed: embed})
        })
    }
}

module.exports.help = {
  name: "ass"
}
