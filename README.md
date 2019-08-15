# Webcord
Webcord is an easy-to-use yet powerful modules for interacting with Discord webhooks. It works in both node.js, and on the browser!
# Getting Started
> Installing
```
npm install webcord --save
```

* Examples
> Embeds are done exactly like RichEmbed in the [Discord.JS](http://discord.js.org) libaray.

> Requiring Webcord
```js
const webcord = require('webcord');
```
> Using Webcord
* How do you get a webhook? you must have "MANAGE_CHANNELS" permission. Find the channel you'd like to send the message too, > Webhooks > Create Webhook
```js
const webcord = require('webcord');

const webhookURL = 'https://discordapp.com/api/webhooks/74947297497294/AhkKjfosAYQIslfh'
const avatarURL = 'https://some-image-url.com/image.png'
new webcord(webhookURL, 'Example Bot', avatarURL)
    .setTitle('Im a title!')
    .setDescription('Im a description!')
    .addField('Field', '1')
    .addField('Field', '2', true)
    .setColor('#00ff44')
    .setTimestamp()
    .setFooter('Im a footer')
    .send()
```

> You can also send normal messages, with of course markdown!
```js
const webcord = require('webcord');

const webhookURL = 'https://discordapp.com/api/webhooks/74947297497294/AhkKjfosAYQIslfh'
const avatarURL = 'https://some-image-url.com/image.png'
new webcord(webhookURL, 'Example Bot', avatarURL)
    .send('This is a regular message with no embed, **and this is some bold text**')
```

> Browser support out of the box!
```html
// Location: index.html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Webcord example</title>
    <script type="text/javascript" src="./node_modules/webcord/web/main.js"></script>
	<script type="text/javascript" src="./index.js"></script>

</head>
<body>
	<h1>Some useless HTML. The scripts running in the background!</h1>
</body>
</html>
```
```js
//Location: index.js
const webhookURL = 'https://discordapp.com/api/webhooks/611379099390181397/thgTaqen-gK1_h6N-qvOJWEbxK7hPWMNFdd2MaAs0UFDNhadsjjsaasjdsa'
const avatarURL = 'https://cdn.discordapp.com/avatars/516840368843522073/1040b30414894c8e427ccae7a96d3718.webp?size=128'
new webcord(webhookURL,'Generic Bot Name',avatarURL)
	.setTitle('This works in node and browsers!')
	.send()
```

# Contributor

* Retr0n
    * Discord: Retr0n#0001
    * Twitter: [ITS_NIGH7OWL](https://twitter.com/ITS_NIGH7OWL)
* Nightz
    * Discord: Nightz#7233
    * Twitter: [NightzBR](https://twitter.com/NightzBR)
