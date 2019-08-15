/** NODE JS */
//const webcord = require('../main')
/** END */

const webhookURL = 'https://discordapp.com/api/webhooks/610720483284877338/z0htnwTcfr6Pk6Sf0Y_3LOTuIhcpXEBZcEq6f50q3Ihc7rHikBN-2AG-Ux2RqGdls0cH'
const avatarURL = 'https://cdn.discordapp.com/avatars/516840368843522073/1040b30414894c8e427ccae7a96d3718.webp?size=128'
new webcord(webhookURL,'OwO',avatarURL)
	.setTitle('This works in node and browsers!')
	.send()