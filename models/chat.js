const mongo = require('mongoose')
const Schema = mongo.Schema
//les attributs
const Chat = new Schema(
{
msg :String
})
module.exports= mongo.model('chat',Chat);