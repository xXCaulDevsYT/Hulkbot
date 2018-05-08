const search = require('random-puppy')

module.exports.run = (bot, message, args, discord) => {
  let em = new discord.RichEmbed()
  .setTitle("Hulkbot Dick")
  .setDescription("Here's a dick pic...")
  .setTimestamp()
  .setFooter(`Requested by ${message.author.username}`)
  let keys = [
    "penis",
    "dick",
    "cock",
    "dong", 
    "plonker"
  ]
  let result = keys[Math.floor(Math.random()*keys.length)]
  
  search(result).then(url => {
    em.setImage(url)
    message.channel.send({embed: em})
  })
}

module.exports.help = {
  name: "dick"
}
