let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/leche de futanari.mp3'
conn.sendFile(m.chat, vn, 'leche de futanari.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /leche|lechita|🥛/i 
handler.command = new RegExp

handler.fail = null
handler.exp = 100
module.exports = handler