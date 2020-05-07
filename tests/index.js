let webcord = require('../build/index')
const webhook = 'https://canary.discord.com/api/webhooks/705517758691016765/N8ihaj7G9LAawVTId1Zp_Hyjw9aOAgyojb2q8wpXWeR3ku9GbFzHWskfm9rdXVbmZqCA'
const avatar = 'https://seismiccore.wtf/assets/logo.png'
new webcord(webhook, 'Webcord', avatar)
.setDescription(`Test`)
.setFooter(new Date())
.setTimestamp()
.setColor('0x2F3136')
.send()
