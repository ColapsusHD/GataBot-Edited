let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Cerra el orto Bananirou.mp3'
conn.sendFile(m.chat, vn, 'Cerra el orto Bananirou.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Callate|Cerra el orto|🤫/i 
handler.command = new RegExp

handler.fail = null
handler.exp = 100
module.exports = handler