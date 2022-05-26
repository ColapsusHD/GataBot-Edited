let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/yumbi yumbi hola como va todo tranqui.mp3'
conn.sendFile(m.chat, vn, 'yumbi yumbi hola como va todo tranqui.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Hola como va todo tranqui|yumbi yumbi/i 
handler.command = new RegExp

handler.fail = null
handler.exp = 100
module.exports = handler