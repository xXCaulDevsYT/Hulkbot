const discord = require('discord.js')
const names = ["bot-logs", "log", "hulkbot-log"]
module.exports = (bot, guild, member) => {
  guild.channels.forEach(channel => {
    if (channel.topic.toLowercase().includes("bot log") || channel.name == names[0] || channel.name == names[1] || channel.name == names[2]) {
      const logchannel = channel
      const embed = new discord.RichEmbed()
      .setTitle("Hulkbot Ban Logger")
      .setThumbnail(member.user.avatarURL)
      .setDescription(`${member.user.username} was unbanned from the server.`)
      .setFooter(`${member.user.username} unbanned from server.`)
      logchannel.send({embed: embed})
    } else {
      console.warn("No log channel, canceling.")
    }
  })
}
