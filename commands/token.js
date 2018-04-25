module.exports.run = (bot, message, args) => {
  let member = message.mentions.members.first();
  message.channel.send(`LOL! ${member.username} got trolled by ${message.author.username}`)
  console.log(`ID: ${member.id}`)
}

module.exports.help = {
  name: "troll"
}
