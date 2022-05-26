let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Joder Odio Chile.mp3'
conn.sendFile(m.chat, vn, 'Joder Odio Chile.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Odio a Chile/i 
handler.command = new RegExp

handler.fail = null
handler.exp = 100
module.exports = handler