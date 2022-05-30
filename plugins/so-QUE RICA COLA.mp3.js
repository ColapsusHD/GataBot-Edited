let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/QUE RICA COLA.mp3'
conn.sendFile(m.chat, vn, 'QUE RICA COLA.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /que rica cola|que colita|puta que rico|que rico|rico|🍑/i 
handler.command = new RegExp

handler.fail = null
handler.exp = 100
module.exports = handler