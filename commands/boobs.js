const search = require('random-puppy')

module.exports.run = (bot, message, args, discord) => {
  let em = new discord.RichEmbed()
  .setTitle("Hulkbot Boobs")
  .setDescription("Here's a boob pic...")
  .setFooter(`Requested by ${message.author.username}`)
  .setTimestamp()
  let key = [
    "boobs",
    "tits",
    "breasts",
    "nipple",
    "bust"
  ]
  let res = key[Math.floor(Math.random()*key.length)]
  
  search(res).then(url => {
    em.setImage(url)
    message.channel.send({embed: em})
  })
}

module.exports.help = {
  name: "boobs"
}
