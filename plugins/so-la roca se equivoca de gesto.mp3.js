let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/la roca se equivoca de gesto.mp3'
conn.sendFile(m.chat, vn, 'la roca se equivoca de gesto.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /🤨|TUN|Moai/i 
handler.command = new RegExp

handler.fail = null
handler.exp = 100
module.exports = handler