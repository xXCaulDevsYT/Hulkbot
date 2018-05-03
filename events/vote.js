const DBL = require('dblapi.js');
const dbl = new DBL(process.env.tok, { webhookPort: 5000, webhookAuth: process.env.whpassword });
dbl.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});
dbl.webhook.on('vote', vote => {
  console.log(vote);
  // Do what you need to do
});
