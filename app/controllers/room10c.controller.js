const Group = require('../models/Group.model')
//const dataEscape = require('../modules/infos');

function firstCheck(group){
    var modulesToShow = [],
        modulesDone = [],
        className = 'bhaskara',
        isFinal = false,
        deltaModule = null,
        omegaModuleContent = null,
        contentFinal = null,
        finalTime = ((2400000 - (Date.now() - group.initTime))/1000)/60,
        finalC = false

    for(oneModule of group.modules){
        if(oneModule.phase <= group.phase){
            oneModule.moduleName = 'system10/modules/' + oneModule.name + 'Module'
            oneModule.className = 'bhaskara'
            if(oneModule.isDone) {
                oneModule.className = 'sridhara'
                modulesDone.push(oneModule.name)
            }
            modulesToShow.push(oneModule)
        }
        if(oneModule.name == 'omega') {
            omegaModuleContent = oneModule.content['phase' + group.omegaPhase]
        }
    }


    switch(group.phase) {

        case 4:

            for(oneModule of group.modules){
                if(oneModule.name == 'delta') deltaModule = oneModule
            }

            break;

        case 10:
            className = 'bramagupta';
            isFinal = true;
            
            for(oneModule of group.modules){
                if(oneModule.name == 'delta') deltaModule = oneModule
            }

            break;

        case 42:
            className = 'sridhara';
            isFinal = true;
            finalTime = group.duration
            
            for(oneModule of group.modules){
                if(oneModule.name == 'delta') deltaModule = oneModule
            }

            if(group.final == 'A'){
                //contentFinal = '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/gsb999VSvh8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                //contentFinal = '<h6>O código de Euler é publicado na internet como código livre.<br>Vários crimes relacionados a atividades da Expoente foram divulgados e descobertos, o que levou a empresa à falência.</h6><br><img class="img-fluid my-2" src="/system10/assets/final/a1.png"><img class="img-fluid my-2" src="/system10/assets/final/a2.png"><img class="img-fluid my-2" src="/system10/assets/final/a3.jpg">'
                //contentFinal = '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/VYmaO18ZjKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                contentFinal = '<iframe height="450" src="https://www.youtube-nocookie.com/embed/MzZR9UOochU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
            else if(group.final == 'B'){
                //contentFinal = '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/kzzXROKd-i0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                //contentFinal = '<h6>Todos foram recompensados pela Expoente. Ela continuou com suas atividades, normalmente, e Euler nunca mais travou por conflitos internos.</h6><br><img class="img-fluid my-2" src="/system10/assets/final/b1.png">'
                //contentFinal = '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/yC6KQerb3Zo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                contentFinal = '<iframe height="450" src="https://www.youtube-nocookie.com/embed/WWKxBKwUqMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
            else{
                //contentFinal = '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1dhzPuT6jm0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                //contentFinal = '<h6>Euler não religou. A Expoente foi à falência, o que desmotivou outras grandes empresas a confiarem totalmente em Inteligências Avançadas.<br>Vários crimes relacionados a atividades da Expoente foram divulgados e descobertos.</h6><br><img class="img-fluid my-2" src="/system10/assets/final/c1.png"><img class="img-fluid my-2" src="/system10/assets/final/c2.png">'
                //contentFinal = '<iframe height="450" src="https://www.youtube-nocookie.com/embed/_AMjqb_Ykuw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                contentFinal = '<iframe height="450" src="https://www.youtube-nocookie.com/embed/5ubAt-4AfLY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

                finalC = true
                className = 'aryabhata'
                for(oneModule of modulesToShow){
                    oneModule.finalC = true
                }
                deltaModule.finalC = true
            }

            break;
    }

    

    return {
        modules: modulesToShow,
        nModules: modulesToShow.length,
        modulesDone: JSON.stringify(modulesDone),
        className, 
        isFinal,
        isDone: group.isDone,
        title: '10Conectados',
        groupNum: group.groupNum,
        pathFile: 'system10/',
        deltaModule,
        finalTime: (finalTime > 40 || finalTime < 0 ? '40': finalTime.toFixed(1)),
        phase: group.phase,
        omegaModuleContent,
        omegaPhase: group.omegaPhase,
        contentFinal,
        finalC
    };

}

function updateCheck(group){
    var modulesDone = [];
    var finalTime = ((2400000 - (Date.now() - group.initTime))/1000)/60

    for(oneModule of group.modules){
        if(oneModule.phase <= group.phase){
            if(oneModule.isDone) modulesDone.push(oneModule.name)
        }
    }

    return {
        modulesDone,
        newPhase: group.phase,
        finalTime: (finalTime > 40 || finalTime < 0 ? '40': finalTime.toFixed(1))
    }
}

function oneModuleDone(phase, modules){

    var nextPhase = true;

    for(oneModule of modules){
        if(oneModule.phase <= phase){
            if(!oneModule.isDone) nextPhase = false
        }
    }

    return nextPhase

}

function updatePhase(whatPhase, groupId){

    let newPhaseUpdate = whatPhase == 'phaseOne' ? {phaseOne: true} : {phaseTwo: true, isDone: true}

    Group.findOneAndUpdate({groupId: groupId}, {
        $set: newPhaseUpdate,
    }).then(() => {

    }).catch((err) => {

    })
}

module.exports = {
	get: (req, res) => {

        const code88 = req.params.code
        const codeURL = Buffer.from(code88, 'base64').toString('ascii')
        
        if(codeURL.endsWith('&')){
            let codeSplit = codeURL.split('&')

            if([3, 4].includes(codeSplit.length)){
                if(codeSplit[0] === 'isqueiperum'){
                    Group.findOne({groupId: parseInt(codeSplit[1])}).then((groupOne) => {
                        if(groupOne){
                            userName = codeSplit[2];

                            let updateUsername = true,
                                omegaPhase = 0

                            for(onePerson of groupOne.team){
                                if(onePerson.name == userName) {
                                    updateUsername = false
                                    omegaPhase = onePerson.omegaPhase
                                }
                            }

                            if(updateUsername){

                                let newTeam = groupOne.team

                                newTeam.push({name: userName, info: '', omegaPhase: 0, omegaUpdate: false, resOmega: [[0.0, 0.0], [0.0, 0.0], [0.0, 0.0], [0.0, 0.0], [0.0, 0.0], [0.0, 0.0], [0.0, 0.0]]})

                                Group.findByIdAndUpdate(groupOne._id, {
                                    $set: {
                                        team: newTeam,
                                    },
                                })
                                .then(() => {
                                    res.render('room10c', {...firstCheck(groupOne), userName, code88,});
                                })
                                .catch((err) => {
                                    console.log('Erro:\n' + err);
                                    res.end('{res: "nop"}');
                                });

                            }
                            else{
                                res.render('room10c', {...firstCheck(groupOne), userName, code88,});
                            }

                        }
                        else{
                            console.log('groupId não bate')
                            res.render('index', {...dataEscape, title: 'Keyscape', messageHere: 'groupId não bate'});
                        }
                    }).catch((err) => {
                        console.log(err)
                        res.render('index', {...dataEscape, title: 'Keyscape', messageHere: err});
                    })
                }
            }
        }
        else{
            console.log('Não termina com &')
            res.render('index', {...dataEscape, title: 'Keyscape', messageHere: 'Não termina com &'});
        }
	},
    getModuleDone: (req, res) => {

        const code88 = req.params.code
        const codeURL = Buffer.from(code88, 'base64').toString('ascii')
        const moduleName = req.params.module
        
        if(codeURL.endsWith('&')){
            let codeSplit = codeURL.split('&')

            if([3, 4].includes(codeSplit.length)){
                if(codeSplit[0] === 'isqueiperum'){
                    Group.findOne({groupId: parseInt(codeSplit[1])}).then((groupOne) => {
                        if(groupOne){

                            let newModules = groupOne.modules,
                                moduleUp = null
                            
                            for(oneModule of newModules){
                                if(oneModule.name == moduleName) {
                                    oneModule.isDone = true
                                    moduleUp = oneModule
                                }
                            }

                            if(moduleUp){
                                var newPhase = groupOne.phase,
                                    isUpdate = false;

                                if(oneModuleDone(newPhase, newModules)){
                                    if(newPhase == 4) {
                                        newPhase = 10
                                        isUpdate = true
                                    }
                                    else{
                                        if((((Date.now() - groupOne.initTime))/1000)/60 > 30){
                                            newPhase = 4
                                            isUpdate = true
    
                                            for(oneModule of newModules){
                                                if(oneModule.name != 'delta' && oneModule.name != 'omega') {
                                                    oneModule.isDone = true
                                                }
                                            }
                                        }
                                        else{
                                            if(newPhase == 1) newPhase = 3
                                            else newPhase++

                                            isUpdate = true
                                        }

                                    }
                                }

                                Group.findByIdAndUpdate(groupOne._id, {
                                    $set: {
                                        modules: newModules,
                                        phase: newPhase,
                                    },
                                })
                                .then(() => {

                                    res.end(JSON.stringify({isUpdate, newPhase}));

                                })
                                .catch((err) => {
                                    console.log('Erro:\n' + err);
                                    res.end('{err: true}');
                                });
                            }
                            else{
                                console.log('não achou modulo')
                                res.end('{err: true}');
                            }
                        }
                        else{
                            console.log('groupId não bate')
                            res.end('{err: true}');
                        }
                    }).catch((err) => {
                        console.log(err)
                        res.end('{err: true}');
                    })
                }
            }
        }
        else{
            console.log('Não termina com &')
            res.end('{res: "nop"}');
        }
        
    },
    getModuleOmegaNext: (req, res) => {

        const code88 = req.params.code
        const codeURL = Buffer.from(code88, 'base64').toString('ascii')
        
        const namePerson = req.params.name
        const omegaPhase = req.params.omegaPhase
        const personRes = req.params.res
        
         if(codeURL.endsWith('&')){
            let codeSplit = codeURL.split('&')

            if([3, 4].includes(codeSplit.length)){
                if(codeSplit[0] === 'isqueiperum'){
                    Group.findOne({groupId: parseInt(codeSplit[1])}).then((groupOne) => {
                        if(groupOne){
                            let newTeam = groupOne.team,
                                samePhase = true,
                                newOmegaPhase = groupOne.omegaPhase

                            for(oneModule of groupOne.modules){
                                if(oneModule.name == 'omega') {
                                    for(onePerson of newTeam){

                                        if(onePerson.name == namePerson) {
                                            onePerson.resOmega[newOmegaPhase] = oneModule.resContent['phase' + newOmegaPhase][parseInt(personRes) - 1]
                                            onePerson.omegaPhase = newOmegaPhase + 1
                                        }

                                        

                                        if(newOmegaPhase + 1 != onePerson.omegaPhase) {
                                            samePhase = false
                                        }
                                        else{
                                        }
                                    }
                                }
                            }

                            if(samePhase){
                                for(onePerson of newTeam) {
                                    onePerson.omegaUpdate = true
                                }
                                newOmegaPhase++
                            }

                            Group.findByIdAndUpdate(groupOne._id, {
                                $set: {
                                    team: newTeam,
                                    omegaPhase: newOmegaPhase
                                },
                            })
                            .then(() => {
                                res.end('{"res": "loading"}');
                            })
                            .catch((err) => {
                                console.log('Erro:\n' + err);
                                res.end('{"res": "nop"}');
                            });

                        }
                        else{
                            console.log('groupId não bate')
                            res.end('{"res": "nop"}');
                        }
                    }).catch((err) => {
                        console.log(err)
                        res.end('{"res": "nop"}');
                    })
                }
            }
        }
        else{
            console.log('Não termina com &')
            res.end('{"res": "nop"}');
        } 
        
    },
    getModuleUpdate: (req, res) => {

        const code88 = req.params.code
        const codeURL = Buffer.from(code88, 'base64').toString('ascii')
        
        if(codeURL.endsWith('&')){
            let codeSplit = codeURL.split('&')

            if([3, 4].includes(codeSplit.length)){
                if(codeSplit[0] === 'isqueiperum'){
                    Group.findOne({groupId: parseInt(codeSplit[1])}).then((groupOne) => {
                        if(groupOne){

                            res.end(JSON.stringify(updateCheck(groupOne)))

                        }
                        else{
                            console.log('groupId não bate')
                            res.end('{err: true}');
                        }
                    }).catch((err) => {
                        console.log(err)
                        res.end('{err: true}');
                    })
                }
            }
        }
        else{
            console.log('Não termina com &')
            res.end('{err: true}');
        }

    },
    getUpdateInitTime: (req, res) => {

        Group.findOne({groupId: parseInt(req.params.code)}).then((groupOne) => {
            if(groupOne){
                Group.findByIdAndUpdate(groupOne._id, {
                    $set: {
                        initTime: req.params.time,
                    },
                })
                .then(() => {
                    res.end('Oks')

                })
                .catch((err) => {
                    console.log('Erro:\n' + err);
                    res.end('Erro');
                });
            }
        }).catch(err => {
            console.log('Erro:\n' + err);
            res.end('Erro');
        })
    },
    getOmegaUpdate: (req, res) => {

        var updateOmega = false

        const code88 = req.params.code
        const namePerson = req.params.name

        const codeURL = Buffer.from(code88, 'base64').toString('ascii')
        
        if(codeURL.endsWith('&')){
            let codeSplit = codeURL.split('&')
            

            if([3, 4].includes(codeSplit.length)){
                if(codeSplit[0] === 'isqueiperum'){
                    Group.findOne({groupId: parseInt(codeSplit[1])}).then((groupOne) => {
                        if(groupOne){
                            var finalTime = ((2400000 - (Date.now() - groupOne.initTime))/1000)/60,
                                newTeam = groupOne.team,
                                nextOmegaPhase = false,
                                contentOmega = null,
                                reloadPage = false,
                                newIsDone = groupOne.isDone,
                                newFinal = 'F',
                                newPhase = groupOne.phase,
                                newDuration = 0,
                                hasUpdate = false

                            for(onePerson of newTeam){
                                if(onePerson.name == namePerson) {
                                    if(onePerson.omegaUpdate){
                                        onePerson.omegaUpdate = false
                                        hasUpdate = true
                                    }
                                }
                            }

                            if(hasUpdate){
                                if(groupOne.omegaPhase == 7){
                                    reloadPage = true
                                    
                                    let finalA = 0.0,
                                        finalB = 0.0
    
                                    newIsDone = true
                                    newPhase = 42
                                    newDuration = ((Date.now() - groupOne.initTime)/1000)/60
    
                                    for(onePerson of groupOne.team){
                                        for(oneRes of onePerson.resOmega){
                                            finalA += oneRes[0];
                                            finalB += oneRes[1];
                                        }
                                    }
    
                                    if((finalA - finalB) >= 2){
                                        newFinal = 'A'
                                    }
                                    else if((finalA - finalB) <= -2){
                                        newFinal = 'B'
                                    }
                                    else{
                                        newFinal = 'C'
                                    }
    
                                }
                                else{
                                    nextOmegaPhase = true
                                    for(oneModule of groupOne.modules){
                                        if(oneModule.name == 'omega') {
                                            contentOmega = oneModule.content['phase' + onePerson.omegaPhase]
                                        }
                                    }
                                }

                                Group.findByIdAndUpdate(groupOne._id, {
                                    $set: {
                                        team: newTeam,
                                        isDone: newIsDone,
                                        final: newFinal,
                                        phase: newPhase,
                                        duration: newDuration,
                                    },
                                })
                                .then(() => {
                                    
                                    res.end(JSON.stringify({contentOmega, reloadPage, nextOmegaPhase, finalTime: (finalTime > 40 || finalTime < 0 ? '40': finalTime.toFixed(1))}))
    
                                })
                                .catch((err) => {
                                    console.log('Erro:\n' + err);
                                    res.end('{"err": true}');
                                });
    

                            }
                            else{
                                res.end(JSON.stringify({contentOmega, reloadPage, nextOmegaPhase, finalTime: (finalTime > 40 || finalTime < 0 ? '40': finalTime.toFixed(1))}))
                            }
                            
                        }
                        else{
                            console.log('groupId não bate')
                            res.end('{"err": true}');
                        }
                    }).catch((err) => {
                        console.log(err)
                        res.end('{"err": true}');
                    })
                }
            }
        }
        else{
            console.log('Não termina com &')
            res.end('{"err": true}');
        }
    }
};