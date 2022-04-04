const Group = require('../../models/Group.model')
const Participant = require('../../models/Participant.model')
const Option = require('../../models/Option.model')
const Voice = require('../../models/Voice.model')
const Omega = require('../../models/Omega.model')

function mountModules(allModules, optionPhases){
    let modulesToShow = [],
        modulesDone = []

    for(oneModule of allModules){
        if(optionPhases.includes(oneModule.phase)) {
            oneModule.specificClass = oneModule.isDone ? 'sridhara' : 'bhaskara'
            oneModule.path = 'system10/modules/' + oneModule.name + 'Module'
            modulesToShow.push(oneModule)
            if(oneModule.isDone) modulesDone.push(oneModule.name)
        }
    }

    return {modulesToShow, modulesNotDone: modulesToShow.filter(x => !modulesDone.includes(x.name)), modulesDone: JSON.stringify(modulesDone)}
}

function mountModulesSameColor(allModules, generalClass){
    let modulesToShow = [],
        modulesDone = []

    for(oneModule of allModules){
        oneModule.specificClass = generalClass
        oneModule.path = 'system10/modules/' + oneModule.name + 'Module'
        modulesToShow.push(oneModule)
        modulesDone.push(oneModule.name)
    }

    return {modulesToShow, modulesDone: JSON.stringify(modulesDone)}
}

async function initPage(oneParticipant, oneGroup, idVoice){
    let allVoices = await Voice.find().lean(),
        oneVoice = {}

    for(oneVoiceLoop of allVoices){
        if(idVoice.toString() == oneVoiceLoop._id.toString()){
            oneVoice = oneVoiceLoop
            oneVoiceLoop.active = 'active'
        }
    }

    let generalClass = 'bhaskara',
        modulesInfo = {},
        omegaContent = {},
        infoContent = {},
        videoContent = {
            intro: oneVoice.intro,
            omega:oneVoice.omega
        },
        omegaModuleContent = [],
        miModuleContent = {},
        arrayIdOmegaModule = '',
        initPhase = false,
        deltaContent = {showDelta: true, isDone: true},
        timeSeconds = oneGroup.duration


    if(oneGroup.phase == 'done'){

        if(oneGroup.final == 'C'){
            generalClass = 'aryabhata'
            modulesInfo = mountModulesSameColor(oneGroup.modules, generalClass)
            omegaContent = {
                button: 'light', 
                status: 'DESLIGADO',
                situation: 'done',
                showOmega: true
            }
            infoContent = {
                status: 'DESLIGADO',
                color: 'light',
                text: 'TODOS OS MÓDULOS DESLIGADOS'
            }
            videoContent.final = oneVoice.finalC
        }
        else{
            generalClass = 'sridhara'
            modulesInfo = mountModulesSameColor(oneGroup.modules, generalClass)
            omegaContent = {
                button: 'success', 
                status: 'OPERANTE',
                situation: 'done',
                showOmega: true
            }
            infoContent = {
                status: 'DISPONÍVEL',
                color: 'success',
                text: 'TODOS OS MÓDULOS FUNCIONANDO'
            }

            if(oneGroup.final == 'A') videoContent.final = oneVoice.finalA
            else videoContent.final = oneVoice.finalB
        }
    }
    else if(oneGroup.phase == 'omega'){
        
        generalClass = 'bramagupta'
        modulesInfo = mountModulesSameColor(oneGroup.modules, generalClass)
        omegaContent = {
            button: 'warning', 
            status: 'DISPONÍVEL',
            situation: 'doing',
            showOmega: true
        }
        
        infoContent = {
            class: 'font-hack',
            status: 'CRÍTICO',
            color: 'warning',
            text: 'MÓDULO PRINCIPAL LIBERADO'
        }
        omegaModuleContent = await Omega.find().lean()
        arrayIdOmegaModule = JSON.stringify(omegaModuleContent.map(value => {return value._id}))

    }
    else{
        if(oneGroup.phase == 'init') initPhase = true

        omegaContent = {
            button: 'danger', 
            status: 'INDISPONIVEL',
            situation: 'todo',
            showOmega: false
        }

        infoContent = {
            class: 'font-hack',
            status: 'INDISPONÍVEL',
            color: 'danger',
            text: 'ALGUNS MODULOS ESTÃO APRESENTANDO PROBLEMAS'
        }

        let optionPhases = await Option.findOne().lean()
        
        miModuleContent = optionPhases.mi
        
        optionPhases = optionPhases.phases
        
        optionPhases = optionPhases.slice(0, optionPhases.indexOf(oneGroup.phase) + 1)
        
        modulesInfo = mountModules(oneGroup.modules, optionPhases)
        
        if(oneGroup.phase != 'delta') deltaContent = {showDelta: false}
        else {
            deltaContent.isDone = false
            modulesInfo.modulesNotDone.push({name: 'delta'})
        }

        timeSeconds = ((oneGroup.maxTime * 60 * 1000) - ((new Date()).getTime() - oneGroup.datetime.getTime())) / 1000
    }

    delete oneGroup.participants
    delete oneGroup.modules

    return {
        generalClass, 
        oneParticipant, 
        oneGroup, 
        ...modulesInfo,
        omegaContent,
        infoContent,
        videoContent,
        omegaModuleContent,
        miModuleContent,
        arrayIdOmegaModule,
        initPhase,
        deltaContent,
        isDone: oneGroup.phase == 'done',
        allVoices,
        nFiles: [1,2,3,4],
        timeSeconds
    }

}

async function checkAndSetFinal(idGroup){
    let oneGroup = await Group.findOne({_id: idGroup}),
        allDone = true,
        omegaValue = [0.0, 0.0]

    for(oneParticipantId of oneGroup.participants){
        let oneParticipantCheck = await Participant.findById(oneParticipantId).lean()

        if(!oneParticipantCheck.omegaReady) {
            allDone = false

            break
        }

        omegaValue[0] += oneParticipantCheck.omegaValue[0]
        omegaValue[1] += oneParticipantCheck.omegaValue[1]
    }

    if(allDone){

        let diffToFinalC = await Option.findOne().lean(),
            diffAToB = omegaValue[0] - omegaValue[1]

        diffToFinalC = diffToFinalC.diffToFinalC * oneGroup.participants.length

        oneGroup.situation = 'done'
        oneGroup.phase = 'done'

        oneGroup.final = Math.abs(diffAToB) < diffToFinalC ? 'C' : (diffAToB >= 0 ? 'A' : 'B')

        oneGroup.save()

        return '{"reload": true}'
    }

    return '{"reload": false}'
}

function clog(value){
    console.log(value)
}

module.exports = {
	get: async (req, res) => {

        try{

            let oneParticipant = await Participant.findOne({idUser: req.user._id, codeGroup: req.params.code}).lean()

            if(oneParticipant){
                
                let oneGroup = await Group.findOne({_id: oneParticipant.idGroup}).lean()
                
                if(oneGroup){
                    
                    if(oneGroup.situation == 'todo'){
                        res.render('wait', {title: '10Conectados', pathFile: 'system10/', generalClass: 'wait', idGroup: oneGroup._id})
                    }
                    else{
                        const initInfos = await initPage(oneParticipant, oneGroup, oneParticipant.voice)
    
                        res.render('room10c', {title: '10Conectados', pathFile: 'system10/', oneUser: req.user, ...initInfos})
                    }
                }
                else throw 'Error: Não achou o grupo'
    
            }
            else throw 'Error: Não achou o participante'

        }
        catch(err){
            console.log(err)
            res.render('err', {title: '10Conectados | Erro', pathFile: 'system10/', className: 'control'})
        }

	},
    getUpdateInitPage: async (req, res) => {
        try{
            let oneGroup = await Group.findOne({_id: req.params.idGroup}).lean()

            res.end(JSON.stringify({phase: oneGroup.phase, modules: oneGroup.modules}))
        }
        catch(err){
            console.log('getUpdateInitPage: ' + err)
            res.end('{"err": true}')
        }

    },
    getUpdateFinalPage: async (req, res) => {
        try{
            let oneGroup = await Group.findOne({_id: req.params.idGroup}).lean()

            res.end(JSON.stringify({phase: oneGroup.phase}))
        }
        catch(err){
            console.log('getUpdateFinalPage: ' + err)
            res.end('{"err": true}')
        }

    },
    getUpdateRoomPage: async (req, res) => {
        try{
            let oneGroup = await Group.findById(req.params.idGroup).lean()

            if(oneGroup.situation != 'todo') res.end('{"reload": true}')

            res.end('{"reload": false}')
        }
        catch(err){
            console.log('Errrr' + err)
            res.end('{"reload": false}')
        }

    },
    postModuleDone: async (req, res) => {
        try{
            let oneGroup = await Group.findOne({_id: req.body.id})

            let updatePhase = true

            let optionPhases = await Option.findOne().lean()

            optionPhases = optionPhases.phases
            
            let optionPhasesGroup = optionPhases.slice(0, optionPhases.indexOf(oneGroup.phase) + 1)

            for(oneModule of oneGroup.modules){

                if(optionPhasesGroup.includes(oneModule.phase)) {
                    if(!oneModule.isDone){
                        if(oneModule.name == req.body.moduleName){
                            oneModule.isDone = true
                        }
                        else{
                            updatePhase = false
                        }

                    }
                }
            }

            if(updatePhase) {
                if(oneGroup.phase != 'delta'){
                    if((oneGroup.maxTime * 60 * 1000) < ((new Date()).getTime() - oneGroup.datetime.getTime())) {
                        oneGroup.phase = 'delta'
                        for(oneModule of oneGroup.modules) oneModule.isDone = true
                    }
                    else oneGroup.phase = optionPhases[optionPhases.indexOf(oneGroup.phase) + 1]
                }
                else {
                    oneGroup.phase = 'omega'
                    oneGroup.duration = (((new Date()).getTime() - oneGroup.datetime.getTime()) / 60 / 1000).toFixed(2)
                }
            }

            await oneGroup.save()

            res.end('{"err": false}')

        }
        catch(err){
            console.log('postModuleDone: ' + err)
            res.end('{"err": true}')
        }
    },
    postModuleDoneOmega: async (req, res) => {

        try{
            let onePartipant = await Participant.findById(req.body.idParticipant),
                allOmegas = await Omega.find().lean(),
                omegaValue = [0.0, 0.0]
                
            for(oneOmega of allOmegas){
                for(oneAlternative of oneOmega.alternatives){
                    if(oneAlternative.letter == req.body.omega[oneOmega._id.toString()]){
                        omegaValue[0] += oneAlternative.value[0]
                        omegaValue[1] += oneAlternative.value[1]

                        break
                    }
                }
            }

            onePartipant.omegaValue = omegaValue
            onePartipant.omegaReady = true

            await onePartipant.save()

            

            res.end(await checkAndSetFinal(onePartipant.idGroup))
        }
        catch(err){
            console.log('Errrrr:' + err)
            res.end('{"reload": true}')
        }

    }
}