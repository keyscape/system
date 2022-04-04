const Group = require('../models/Group.model');
const Participant = require('../models/Participant.model');

const Omega = require('../models/Omega.model');
const ObjectId = require('mongoose').Types.ObjectId

module.exports = {
    create: async (participantData) => {
        try{

            const oneGroup = await Group.findOne(
                { 
                    $and: [
                        { code: participantData.codeGroup },
                        { situation: { $ne: 'done' }},
                        { phase: { $ne: 'omega' }},
                        { phase: { $ne: 'done' }},
                    ]
                }
            ).lean()

            if(oneGroup){

                if(!(await Participant.exists({idUser: participantData.idUser, idGroup: oneGroup._id}))){
                    const allOmega = await Omega.find().lean();

                    let newParticipant = new Participant({
                        idUser: participantData.idUser,
                        idGroup: oneGroup._id,
                        numGroup: oneGroup.num,
                        codeGroup: oneGroup.code,
                        date: oneGroup.date,
                        //omega: allOmega.map((omegaOne) => {return {idOmega: omegaOne._id, letter: '-1', value: [0.0, 0.0]}})
                    })
    
                    await newParticipant.save()
    
                    await Group.findByIdAndUpdate(oneGroup._id, {
                        $push: {participants: newParticipant._id}
                    })
                    
                    console.log('---> Create Participant OK <---\n')

                    return true
                }
                else throw 'Error: Esse usuário já está presente nesse grupo'
            }
            else throw 'Error: Código errado, ou já está no omega, ou já terminou'

        }
        catch(err){
            console.log('---> Create Participant Error <---\n' + err)
            return false
        }
    },
    delete: async (groupIdStr) => {
        await Group.deleteOne({ _id: new ObjectId(groupIdStr) })
    }
}