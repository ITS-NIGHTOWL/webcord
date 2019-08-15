/** NODE JS */
//const webcord = require('../main')
/** END */

const webhookURL = 'https://discordapp.com/api/webhooks/611379099390181397/thgTaqen-gK1_h6N-qvOJWEbxK7hPWMNFdd2MaAs0UFDNhadsjjsaasjdsa'
const avatarURL = 'https://cdn.discordapp.com/avatars/516840368843522073/1040b30414894c8e427ccae7a96d3718.webp?size=128'
new webcord(webhookURL,'OwO',avatarURL)
	.setTitle('This works in node and browsers!')
	.send()