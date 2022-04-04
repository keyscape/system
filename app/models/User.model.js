const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username:	{
        type: String,
        required: true,
    },
    passwordHash:	{
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    ra: String,
    cpf: String,
    edu: String,
    age: {
        type: String,
        required: true,
    },
    isAdmin:	{
        type: Boolean,
        default: false,
        required: true,
    },
})

module.exports = mongoose.model('user', userSchema);

