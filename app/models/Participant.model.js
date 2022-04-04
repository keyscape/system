const mongoose = require('mongoose');
const { Schema } = mongoose;

const participantSchema = new Schema({
    idUser: {
        type: mongoose.ObjectId,
        required: true,
    },
    idGroup: {
        type: mongoose.ObjectId,
        required: true,
    },
    numGroup:	{
        type: Number,
        required: true,
    },
    codeGroup:	{
        type: String,
        required: true,
    },
    date:	{
        type: String,
        required: true,
    },
/*     omega:	{
        type: [{
            idOmega: {
                type: mongoose.ObjectId,
            },
            letter: {
                type: String,
            },
            value: {
                type: [Number],
            }
        }],
        default: []
    }, */
    omegaValue:	{
        type: [Number],
        default: [0.0, 0.0],
        required: true,
    },
    omegaReady:	{
        type: Boolean,
        default: false,
        required: true,
    },
    voice:	{
        type: mongoose.ObjectId,
        default: new mongoose.Types.ObjectId('624b0415e7afda24d95faa10'),
        required: true,
    },
})

module.exports = mongoose.model('participant', participantSchema);

