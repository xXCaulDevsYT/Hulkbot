module.exports.run = (bot, message, args) => {
let msg = args.join(" ");
if (message.author.id !== message.guild.ownerid) {
  message.guild.members.forEach(member => {
    if (member.hasPermission("ADMINISTRATOR") || member.hasPermission("MANAGE_SERVER")) {
      message.channel.send("Alerting admins...")
      if (!msg) {
        member.send(`${message.member.user.username} is calling for you in server ${message.guild.name}.`)
        message.channel.send(`Alerted ${member.user.username}.`)
      } else {
        member.send(`${message.author.username} is calling for you in server ${message.guild.name}. Message: ${msg}`)
        message.channel.send(`Alerted ${member.user.username}.`)
      }
    }
  })
  } else {
    message.channel.send("Only the guild member can use this command.");
  }
}

module.exports.help = {
  name: "alert",
  usage: "h!alert [msg]"
}
