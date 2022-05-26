let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Momo bailando salimos en caravana.mp3'
conn.sendFile(m.chat, vn, 'Momo bailando salimos en caravana.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Salimo en caravana|Momo bailando/i 
handler.command = new RegExp

handler.fail = null
handler.exp = 100
module.exports = handler