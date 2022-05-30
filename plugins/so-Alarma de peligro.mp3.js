let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Alarma de peligro.mp3'
conn.sendFile(m.chat, vn, 'Alarma de peligro.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /como???|como?|como??|🚨/i 
handler.command = new RegExp

handler.fail = null
handler.exp = 100
module.exports = handler