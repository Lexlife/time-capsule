const { Schema, model } = require('mongoose')

const UserModelSchema = new Schema({
  login: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
})

module.exports = model("UserModel", UserModelSchema)
