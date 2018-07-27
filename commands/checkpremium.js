const fs = require('fs')
const config = require('../json/config.json')

module.exports.run = (bot, message, args, discord) => {
    function notfree() {
    let ga = bot.guilds.get('441074979623141388')
    let member = message.author
    if (message.member == message.guild.owner) {
    if (ga.members.get(member.id).roles.find('name','Donator')) {
        
            let em = new discord.RichEmbed()
            .setTitle(":money_mouth: Hulkbot Premium :money_mouth:")
            .setDescription(`:moneybag: Your premium status is active! Thanks for donating! :moneybag:`)
            .setThumbnail(bot.user.avatarURL)
            .setColor("GREEN")
            .setTimestamp()
            message.channel.send(em)
    } else {
        let em = new discord.RichEmbed()
        .setTitle(":money_mouth: Hulkbot Premium :money_mouth:")
        .setDescription(`:thumbsdown: Your premium status is unactive. Buy premium [here!](https://www.paypal.com/caulden/1 "buy premium") :thumbsdown:`)
        .setThumbnail(bot.user.avatarURL)
        .setColor("RED")
        .setTimestamp()
        message.channel.send(em)
    }
  } else {
      let em = new discord.RichEmbed()
      .setTitle("Failure! :face_palm:")
      .setDescription("You Have Insufficient Permisions To Run the Current Command.")
      .setThumbnail(bot.user.avatarURL)
      .setColor("RED")
      .setTimestamp()
      
    message.channel.send({embed: em})
  }
    }
    if (bot.guilds.size >= 50 && !bot.guilds.size <= 55 ) {
        let em = new discord.RichEmbed()
        .setTitle("Premium Check")
        .setDescription("PREMIUM IS FREE! (until bot reaches 55 servers.) ENJOY! :smile:")
        .setTimestamp()
        .setFooter()
        message.channel.send({embed: em})
    } else {
        notfree()
    }
}

module.exports.help = {
    name: "checkpremium"
}
