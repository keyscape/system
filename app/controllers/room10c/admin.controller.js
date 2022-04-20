const Group = require('../../models/Group.model')
const Participant = require('../../models/Participant.model')
const User = require('../../models/User.model')
const Option = require('../../models/Option.model')
const manageGroup = require('../../modules/manageGroup')
const mountPartial = require('../../modules/mountPartial')

const allMonths = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

async function prepareParticipants(oneGroup){
    let allParticipants = []

    for(oneParticipantId of oneGroup.participants){

        let oneParticipant = await Participant.findById(oneParticipantId).lean()
            
        let oneUser = await User.findOne({_id: oneParticipant.idUser}).lean()

        oneParticipant.omegaValue[0] = 'A: ' + oneParticipant.omegaValue[0].toFixed(1)
        oneParticipant.omegaValue[1] = ' B: ' + oneParticipant.omegaValue[1].toFixed(1)
                
        allParticipants.push({...oneUser, ...oneParticipant})

    }

    return allParticipants
}

module.exports = {
    get: async (req, res) => {

        let allGroups = await Group.find().lean(),
            allDates = []

        allGroups = allGroups.reverse()

        for(oneGroup of allGroups){
            oneGroup.dateFormated = oneGroup.datetime.getDate() + '/' + allMonths[oneGroup.datetime.getMonth()] + '/' + (oneGroup.datetime.getFullYear() - 2000)
            oneGroup.numParticipants = oneGroup.participants.length

            if (!allDates.includes(oneGroup.dateFormated)) allDates.push(oneGroup.dateFormated)
        }

        

        res.render('admin10c', {title: '10Conectados | Admin', pathFile: 'system10/', generalClass: 'admin', user: req.user, allGroups, allDates, nGroups: allGroups.length})

    },
    postCreateGroup: (req, res) => {
        res.end(JSON.stringify(manageGroup.create(req.body)))
    },
    getIntervalAllGroups: async (req, res) => {

        let allGroups = await Group.find().lean(),
            allDates = [],
            dataToSend = {}

        allGroups = allGroups.reverse()

        for(oneGroup of allGroups){
            oneGroup.dateFormated = oneGroup.datetime.getDate() + '/' + allMonths[oneGroup.datetime.getMonth()] + '/' + (oneGroup.datetime.getFullYear() - 2000)
            oneGroup.numParticipants = oneGroup.participants.length

            if (!allDates.includes(oneGroup.dateFormated)) allDates.push(oneGroup.dateFormated)
        }

        if(parseInt(req.params.nGroups) != allGroups.length) dataToSend.attAll = true
        else dataToSend.attAll = false

        dataToSend.newGroups = mountPartial.createAdminGroups(allGroups)
        
        res.end(JSON.stringify(dataToSend))
        
    },
    getUpdateGroup: async (req, res) => {

        try{
            let oneGroup = await Group.findById(req.params.id).lean()
            
            if(oneGroup){

                let allParticipants = await prepareParticipants(oneGroup)

                res.render('updateGroup10c', {title: '10Conectados | Editar Grupo', pathFile: 'system10/', generalClass: 'admin', allParticipants, allModules: oneGroup.modules, oneGroup, options: await Option.find().lean()})
            
            }
            else{
                res.render('err', {title: '10Conectados | Erro', pathFile: 'system10/', generalClass: 'admin'})
    
            }
        }catch(err){
            res.render('err', {title: '10Conectados | Erro', pathFile: 'system10/', generalClass: 'admin'})
        }
    },
    postUpdateGroup: async (req, res) => {
        try{
            let dataToUpdate = req.body,
                idGroup = dataToUpdate.id

            delete dataToUpdate.id

            if(dataToUpdate.situation == 'doing'){ 
                let dateNow = new Date()

                dataToUpdate.date = dateNow.getFullYear() + '-' + ( dateNow.getMonth() < 9 ? '0' + (dateNow.getMonth() + 1) : (dateNow.getMonth() + 1) ) + '-' + (dateNow.getDate() < 10 ? '0' + dateNow.getDate() : dateNow.getDate())
                dataToUpdate.time = (dateNow.getHours() < 10 ? '0' + dateNow.getHours() : dateNow.getHours()) + ':' + (dateNow.getMinutes() < 10 ? '0' + dateNow.getMinutes() : dateNow.getMinutes())
                dataToUpdate.datetime = dateNow
            }

            await Group.findByIdAndUpdate(idGroup, dataToUpdate)

            res.end('{"err": false}')

        }
        catch(err){
            console.log(err)
            res.end('{"err": true}')
        }
    },
    getIntervalOneGroup: async (req, res) => {
        try{
            let oneGroup = await Group.findById(req.params.idGroup).lean()
    
            if(req.params.whatToUpdate == 'participants'){

                let allParticipants = await prepareParticipants(oneGroup)

                res.end(JSON.stringify({newParticipants: mountPartial.createAdminParticipants(allParticipants)}))
            }
            else if(req.params.whatToUpdate == 'modules'){
                res.end(JSON.stringify({newModules: mountPartial.createAdminModules(oneGroup.modules)}))
            }
            else if(req.params.whatToUpdate == 'configs'){
                res.end(JSON.stringify({newConfigs: oneGroup}))
            }
            else{
                res.end(JSON.stringify({err: true}))
            }
    
        }catch(err){
            res.end(JSON.stringify({err: true}))
        }


    },
    getUpdateGroupModule: async (req, res) => {
        let oneGroup = await Group.findById(req.params.idGroup).lean(),
            moduleToSend = {}

        for(oneModule of oneGroup.modules){
            if(oneModule.name == req.params.nameModule){
                moduleToSend = oneModule
                break;
            }
        }

        res.end(JSON.stringify(moduleToSend))
    },
    postUpdateGroupModule: async (req, res) => {
        try{
            let oneGroup = await Group.findById(req.body.idGroup).lean(),
            moduleToSend = {}
    
            let newModules = oneGroup.modules
    
            for(oneModule of newModules){
                if(oneModule.name == req.body.name){
                    oneModule.isDone = req.body.isDone
                    break;
                }
            }
    
            await Group.findByIdAndUpdate(oneGroup._id.toString(),{modules: newModules})

            res.end('{"err": false}')
        }
        catch(err){
            console.log(err)
            res.end('{"err": true}')
        }
        
    },
};