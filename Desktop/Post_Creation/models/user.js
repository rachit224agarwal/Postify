const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/postcreationapp`)

const userSchema =  mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
    age: Number,
    posts: [ {type: mongoose.Schema.Types.ObjectId, ref: 'post'} ],
    profilepic:{
        type: String,
        default: 'default.png'
    }
})

module.exports = mongoose.model('user', userSchema)