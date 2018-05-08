const puppy = require('random-puppy')

module.exports.run = (bot, message, args, discord) => {
  let keywords = [
    "ass",
    "butt",
    "asshole",
    "pussy",
    "butthole"
  ]
  
  var result = keywords[Math.floor(Math.random()*keywords.length)]
  
  puppy(result).then(url => {
    let embed = new discord.RichEmbed()
    .setTitle("Hulkbot Ass")
    .setDescription("Here's an ass pic...")
    .setImage(url)
    .setTimestamp()
    .setFooter(`Requested by ${message.author.username}`)
    message.channel.send({embed: embed})
  })
}

module.exports.help = {
  name: "ass"
}
