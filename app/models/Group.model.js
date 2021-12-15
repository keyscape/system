const mongoose = require('mongoose');
const { Schema } = mongoose;
const Module = require('./Module.model')

const groupSchema = new Schema({
    groupNum: {
        type: Number,
        required: true,
    },
    groupId:	{
        type: Number,
        required: true,
    },
    initTime:	{
        type: Number,
        default: 0,
        required: true,
    },
    duration:	{
        type: Number,
        default: 0,
        required: true,
    },
    phase:	{
        type: Number,
        default: 0,
        required: true,
    },
    omegaPhase:	{
        type: Number,
        default: 0,
        required: true,
    },
    isDone:	{
        type: Boolean,
        default: false,
        required: true,
    },
    final:	{
        type: String,
        default: 'F',
        required: true,
    },
    team:	{
        type: [{			
            name:	{
                type: String,
                required: true,
            },
            info:	{
                type: String,
                required: true,
            },
            omegaPhase:	{
                type: Number,
                required: true,
            },  
            omegaUpdate:	{
                type: Boolean,
                default: false,
                required: true,
            },
            resOmega:	{},
        }]
    },
    modules: [Module.schema]	
})

module.exports = mongoose.model('group', groupSchema);

