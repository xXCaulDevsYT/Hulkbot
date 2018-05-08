const search = require('random-puppy')

module.exports.run = (bot, message, args, discord) => {
  let em = new discord.RichEmbed()
  .setTitle("Hulkbot Fuck")
  .setDescription("Here's a fuck pic...")
  .setTimestamp()
  .setFooter()
  
  let keys = [
    "fuck",
    "pussyfuck",
    "assfuck",
    "penetration",
    "penetrate"
  ]
  
  let res = keys[Math.floor(Math.random()*keys.length)]
  
  search(res).then(url => {
    em.setImage(url)
    message.channel.send({embed: em})
  })
}

module.exports.help = {
  name: "fuck"
}
