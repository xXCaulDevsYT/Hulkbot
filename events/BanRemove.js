const discord = require('discord.js')

module.exports = (bot, guild, member) => {
  member.send(`${member.user.username}, you have now been unbanned from ${guild.name}!`)
  let channel = guild.channels.find('name', 'guild-bot-log')
  if (!channel) {
    console.warn(`Guild ${guild.name} has no log channel, canceling send.`);
  } else {
    let embed = new discord.RichEmbed()
      .setTitle("Hulkbot Logger")
      .setDescription(`${member.user.username} was just unbanned from ${guild.name}`)
      .setTimestamp()
      .setColor("BLUE")
      .setThumbnail(member.user.avatarURL)
      .setFooter(`${member.user.username} unbanned`)
      channel.send({embed: embed})
  }
}
