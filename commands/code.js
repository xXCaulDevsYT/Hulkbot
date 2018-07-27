const code = require("../json/redeem/codes.json").codes

module.exports.run = (bot, message, args, discord) => {
  let msg = args.join(" ")
  if (codes.includes(msg)) {
    let em = new discord.RichEmbed()
    .setTitle(`${bot.user.displayName} Code Redemption`)
    .setDescription(`Correct Code! Use this invite to go to the Hulkbot Base discord where you'll get the Premium permisions, and more!`)
    .addField(`[Invite](https://discord.gg/jjsjsosco "Click to go to the Hulkbot Base!")`)
    .setAuthor(`${bot.user.avatarURL} ${bot.user.username}`)
    .setColor(`BLUE`)
    .setTimestamp()
    message.channel.send({embed: em}).then(m => m.delete(5500))
  } else {
    message.channel.send("That code might not be correct , or may be mispelled recheck the code and make sure its right & try again.")
  }
}

module.exports.help = {
  name: "redeem"
}
