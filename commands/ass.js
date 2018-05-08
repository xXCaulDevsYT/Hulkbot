const puppy = require('random-puppy')

module.exports.run = (bot, message, args, discord) => {
  let keywords = [
    "ass",
    "butt",
    "asshole",
    "pussy",
    "butthole"
  ]
  
  puppy(keywords).then(url => {
    let embed = new discord.RichEmbed()
    .setTitle("Hulkbot Ass")
    .setDescription("Here's an ass pic...")
    .setImage(url)
    .setTimestamp()
    .setFooter(`Requested by ${message.author.username`)
  })
}

module.exports.help = {
  name: "ass"
}
