![Build](https://github.com/ITS-NIGHTOWL/Webcord/workflows/TypeScript%20CI/badge.svg) [![NPM](https://nodei.co/npm/webcord.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/webcord/)
--------------------------------------------------------------------------------------------		
 # Webcord		
 Webcord is an easy-to-use yet powerful modules for interacting with Discord webhooks. It works in both node.js, and on the browser!		

  ## Installing		

  ```		
 npm install webcord		
 ```		

  ## Examples		

  * Message Embed's use the same methods as [Discord.JS MessageEmbed](https://discord.js.org/#/docs/main/stable/class/MessageEmbed)!		

  ### Posting to a WebHook		
 ```js		
 const webcord = require('webcord');		
 const webhookURL = 'https://discordapp.com/api/webhooks/123456789/ABCDEFGHIJKLMNOPQRSTUZWXYZ'		
 const avatarURL = './MyImage.png'		
 new webcord(webhookURL, 'WebCord', avatarURL)		
     .setTitle('Title')		
     .setDescription('Description!')		
     .addField('Field', '1')		
     .addField('Field', '2', true)		
     .setColor('#00ff44')		
     .setTimestamp()		
     .setFooter('Footer')		
     .send('Raw Text Message') // NOTE: You MUST include .send() to make the WebHook POST request, but you do not have to include any arguments if you don't want to!		
 ```		
 The above example would look like this:		

  <img src='https://cdn.discordapp.com/attachments/580515184184131584/707843551719063633/unknown.png'>		

  ## WebCord in a Browser		

  ```html		
 <!--File: index.html-->		
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
 	<h1>WebCord</h1>		
 </body>		
 </html>		
 ```		
 ```js		
 // File: index.js		
 const webcord = require('webcord');		
 const webhookURL = 'https://discordapp.com/api/webhooks/123456789/ABCDEFGHIJKLMNOPQRSTUZWXYZ'		
 const avatarURL = 'https://cdn.discordapp.com/avatars/516840368843522073/1040b30414894c8e427ccae7a96d3718.webp?size=128'		
 new webcord(webhookURL,'WebCord',avatarURL)		
 	.setTitle('This works in node and browsers!')		
 	.send()		
 ```		
 The above example would look like this:		

  <img src='https://cdn.discordapp.com/attachments/580515184184131584/707844501888172063/unknown.png'>		

  # Contributing		
 WebCord Contributors can be found [here](https://github.com/ITS-NIGHTOWL/Webcord/graphs/contributors)!		

  Want to contribute? Follow the [Contributing Guide](https://github.com/ITS-NIGHTOWL/Webcord/blob/master/CONTRIBUTING.md)!		
