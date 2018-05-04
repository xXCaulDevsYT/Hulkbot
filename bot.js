// init ;p
const time = Date(),
stitch = require("mongodb-stitch"),
pak = require('./package.json'),
discord = require('discord.js'),
config = require('./config.json'),
profanities = require("./profanities.json"),
bot = new discord.Client(),
prefix = process.env.prefix,
{baselogger} = require('./logger.js'),
result = Math.round(Math.random()),
updates = ["Now using Enmap as a database."],
webhookchannelid = "441710517460008960",
Enmap = require('enmap'),
EnmapLevel = require('enmap-level'),
filter = "true",
cleverbot = require('cleverbot.io'),
cb = new cleverbot("sMNApmkOjMlZRlPZ", "gskxw3JBqEVGIAboBjOnvyTf8awM1MbS")
config.updates = updates.join(' ')
// End of init

// The bot's support server invite vvv
bot.invite = "https://discord.gg/qEFNkxB"
// No more invite.

// Grab the enmap.

bot.settings = new Enmap({provider: new EnmapLevel({name: "Settings"})})

const defaultsettings = {
  prefix: "h!",
  modlogchannelid: "",
  modroleid: "",
  adminroleid: "",
  filter: "true"
}

// Gather commands
bot.commands = new discord.Collection();

require('fs').readdir("./commands/", (err, files) => {
  console.log("Loading commands...");
  if (err) return console.log(`Command loading failed!`);
  files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
  });
});

bot.on("ready", () => {
  let upmsg = `Oh yeah, more updates! New updates:\n${updates}`
  
  bot.channels.get('441982405985828864').send(upmsg)
  bot.channels.get('441982440005697539').send(upmsg)
  require('./events/vote.js')(bot)
  require('./util/poststats.js')(bot)
  require('./util/consoles.js')(bot, config)
  bot.user.setActivity("Loading Hulkbot...", {type: "STREAMING", url: "https://twitch.tv/freakinghulk"})
  
  setTimeout(() => {
    bot.user.setActivity(`for h!help | ${bot.guilds.array().length} servers`, {type: "WATCHING"});
  }, 20000)

  bot.guilds.forEach((guild, id) => {
    console.log(`[SERVER] [${guild.memberCount}] ${guild.name} (${guild.id}) | Joined: ${guild.joinedAt.toString()}\n`)

  });
});
bot.on("guildMemberAdd", (member) => require('./events/guildMemberAdd.js')(bot, member))
bot.on("guildMemberRemove", (member) => require('./events/guildMemberRemove.js')(bot, member))
bot.on("guildBanAdd", (guild, member) => require('./events/BanAdd.js')(bot, guild, member))
//bot.on("guildBanRemove", (guild, member) => require('./events/BanRemove.js')(bot, guild, member))
 
bot.on("message", message => {
  const guildConf = bot.settings.get(message.guild.id)
 if (guildConf.filter == "true") {
    for (x = 0; x < profanities.length; x++) {
      if (message.cleanContent.toLowerCase().includes(profanities[x].toLowerCase())) {
        console.log(`[Profanity] ${message.author.username}, said ${profanities[x]} in the ${message.channel.name} channel!`);
        message.channel.send(`<@${message.author.id}>, LANGUAGE!`).then(m => m.delete(10000));
        message.delete(500);
        return;
      }
    }
  }
  if (message.channel.type == "dm") {
    return;
    require('./events/cleverbot.js')(bot, message, cb, prefix)
  } else {
    if (!message.content.startsWith(prefix)) return;
  }

  let mArray = message.content.split(" ");
  let args = mArray.slice(1);
  let loggedcmd = mArray[0].slice(prefix.length)

  let cmd = bot.commands.get(loggedcmd);
  if (message.author.bot) return;

  if (cmd) {
      if (config.userblacklist.includes(message.author.id)) return;
      message.channel.startTyping();
        cmd.run(bot, message, args, discord);  
      message.channel.stopTyping();
        console.log(`${message.author.username} used the ${loggedcmd} command.`);
        if (message.guild.id == "427846834225020928") {
        return;
    } else {
        baselogger(bot, `**Command Run**\n\n**Command:** ${loggedcmd}\n**User:** ${message.author.tag}\n**Message:** ${message.content}\n**Guild:** ${message.guild.name}\n**Channel:** ${message.channel.name}`);
    }
  } 
});

bot.on("message", message => {
  if (message.author.bot) return;
  if (message.content == prefix + "filteroff") {
    // Prevents Unauthorized Users from accessing filters
    if (message.member.hasPermission("MANAGE_GUILD")) {
      const guildConf = bot.settings.get(message.guild.id)
      guildConf.filter = "false"
      bot.settings.set(message.guild.id, guildConf)
      message.channel.send("Okay, I have disabled my filters for this guild.");
      console.log(`${message.author.username} turned the filters off for ${message.guild.name}`);
    } else {
      return message.channel.send("Sorry, you don't have the required permissions!");
    }
  }
  if (message.content == prefix + "filteron") {
    // Prevents Unauthorized Users from accessing filters
    if (message.member.hasPermission("MANAGE_GUILD")) {
      const guildConf = bot.settings.get(message.guild.id)
      guildConf.filter = "true"
      bot.settings.set(message.guild.id, guildConf)
      message.channel.send("Okay, I have enabled my filters for this guild.");
      console.log(`${message.author.username} turned the filters on for ${message.guild.name}`);
    } else {
      return message.channel.send("Sorry, but you don't have the required permissions.");
    }
    if (message.content.toLowerCase().includes("i love you hulkbot")) {
    message.channel.send("oh god, not another one");
  }
  if (message.content.includes(`<@294194506113220608>`)) {
      let embed = new discord.RichEmbed()
      .setTitle("Hulkbot for Beginners")
      .setDescription("YUP! It's me, Hulkbot! To see more info on me, use the info command. (h!info)")
      .setColor("PURPLE")
      .setThumbnail(bot.user.avatarURL)
      .setTimestamp()
   message.channel.send({embed: embed})
  }
  }
 });
      
bot.on("guildCreate", (guild) => {
  bot.settings.set(guild.id, defaultsettings)
    .then(() => console.log(`Successfully set guild settings.`))
    .catch(err => console.error(`Failed to set guild settings.`))
  require('./events/guildCreate.js')(bot, guild, discord)
  baselogger(bot, `**Guild Join**\n\n**Guild:** ${guild.name}\n**Owner:** ${guild.owner.user.username}\n**Large:** ${guild.large}\n**Member Count:** ${guild.memberCount}\n\n**Total Guilds:** ${bot.guilds.array().length}`, guild.iconURL);
});

bot.on("guildDelete", (guild) => {
  bot.settings.delete(guild.id)
    .then(() => console.log(`Successfully removed guild settings.`))
    .catch(err => console.error(err))
  // require('./mysql2.js')(bot, guild)
  require('./events/guildDelete.js')(bot, guild, discord)
  baselogger(bot, `**Guild Leave**\n\n**Guild:** ${guild.name}\n**Owner:** ${guild.owner.user.username}\n**Large:** ${guild.large}\n**Member Count:** ${guild.memberCount}\n\n**Total Guilds:** ${bot.guilds.array().length}`, guild.iconURL);
});

bot.login(process.env.botToken); 

exports.date = time
exports.bot = bot
exports.updates = updates.join(" ")
