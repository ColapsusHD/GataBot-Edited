let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Y Digo Wo.mp3'
conn.sendFile(m.chat, vn, 'Y Digo Wo.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Y Digo Wo/i 
handler.command = new RegExp

handler.fail = null
handler.exp = 100
module.exports = handler