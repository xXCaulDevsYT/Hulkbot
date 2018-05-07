module.exports.run = (bot, message, args, discord) => {
  let role = message.mentions.roles.first();
  let member = message.mentions.members.first();
  if (!member) return message.channel.send("You need to mention someone.");
  let roleid = role.id;
  let rolename = role.name;
  
  if (!role) return message.channel.send(`You need to mention a role.`);
  if (!message.guild.roles.get(roleid)) return message.channel.send(`That role doesn't exist...`);
  message.channel.send(`Okay! I added the role ${rolename} to the user <@${member.id}>.`)
  member.addRole(role.id);
};

module.exports.help = {
  name: "addrole"
};
