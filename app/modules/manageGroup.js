const Group = require('../models/Group.model');
const Module = require('../models/Module.model');
const ObjectId = require('mongoose').Types.ObjectId

const alphaNum = 'abcdefghijklmnopqrstuvwxyz0123456789'

function randomNum(max = 36){
    return Math.floor(Math.random() * max)
}

module.exports = {
    create: async (groupData) => {
        try{

            let groupNumMax = 0

            try{
                groupNumMax = await Group.find().sort({ num: -1 }).limit(1).then(oneGroup => oneGroup[0].num)
            }
            catch(err){
                console.log('Grupo 1');
            }
            
            let datetimeGroup = new Date(groupData.date.split('-')[0], parseInt(groupData.date.split('-')[1]) - 1, groupData.date.split('-')[2]),
                codeExists = true,
                newCode = ''

            if(groupData.time != '') datetimeGroup.setHours(groupData.time.split(':')[0], groupData.time.split(':')[1])
            else groupData.time = '00:00'

            while(codeExists){
                newCode = alphaNum[randomNum()] + alphaNum[randomNum()] + alphaNum[randomNum()]

                codeExists = await Group.exists({ code: newCode });
            }
    
            const newGroup = new Group({
                num: groupNumMax + 1,
                code: newCode,
                info: groupData.info,
                date: groupData.date,
                time: groupData.time,
                datetime: datetimeGroup,
                maxTime: groupData.maxTime,
                modules: await Module.find().lean()
            })
    
            await newGroup.save()

            console.log('---> Create Group OK <---\n')

            return {err: false}

        }
        catch(err){
            console.log('---> Create Group Error <---\n' + err)
            return {err: true}
        }
    },
    delete: async (groupIdStr) => {
        await Group.deleteOne({ _id: new ObjectId(groupIdStr) })
    }
}