const request = require("snekfetch")
const fs = require("fs")

module.exports.run = (bot, message, args, discord) => {
  var max = 12449;
    var min = 10000;
    var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
    var MathLoL = Math.round(MathRan);
    if (!message.channel.nsfw) {
        message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
    } else {
        request.get("http://media.oboobs.ru/boobs_preview/" + MathLoL + ".jpg").then(r => {
            let img = fs.writeFile(`ass.jpg`, r.body)
            let em = new discord.RichEmbed()
            .setTitle("Hulkbot Ass")
            .setDescription("Here's an ass pic...")
            .setImage(img)
            message.channel.send({embed: em})
            fs.unlink(`./ass.jpg`)
        })
    }
}

module.exports.help = {
  name: "ass"
}
