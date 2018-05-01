/* module.exports.run = (bot, message, args, discord) => {
let params = encodeURIComponent(args.join(' '));
  require('snekfetch').get(`https://roblox.com/catalog/json?Keyword=${params}`)
  .then(result => {
    let em = new discord.RichEmbed()
    .setTitle("ROBLOX Catalog Search")
    .setDescription("Results:")
    .addField(result.body.0["Name"])
  })
}
*/
module.exports.help = {
  name: "catalogsearch"
}
