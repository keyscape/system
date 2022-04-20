const mongoose = require('mongoose');
const { Schema } = mongoose;
const Module = require('./Module.model')

const groupSchema = new Schema({
    num: {
        type: Number,
        required: true,
    },
    code:	{
        type: String,
        required: true,
    },
    info: String,
    date:	{
        type: String,
        required: true,
    },
    time:	{
        type: String,
        required: true,
    },
    datetime:	{
        type: Date,
        required: true,
    },
    maxTime:	{
        type: Number,
        required: true,
    },
    duration:	{
        type: Number,
        default: 0,
        required: true,
    },
    situation:	{
        type: String,
        default: 'todo',
        required: true,
    },
    phase:	{
        type: String,
        default: 'init',
        required: true,
    },
    final:	{
        type: String,
        default: 'F',
        required: true,
    },
    modules: [Module.schema],
    participants: {
        type: Array,
        default: [],
        required: true,
    }
})

module.exports = mongoose.model('group', groupSchema);

