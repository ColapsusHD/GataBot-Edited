let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Porque me excita tanto.mp3'
conn.sendFile(m.chat, vn, 'Porque me excita tanto.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Porque me excita tanto|🥵/i 
handler.command = new RegExp

handler.fail = null
handler.exp = 100
module.exports = handler