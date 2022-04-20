const   _pathIntervalOneGroup = '/room10c/admin/intervalOneGroup/',
        _pathUpdateGroup = '/room10c/admin/updateGroup/',
        _pathUpdateGroupModule = '/room10c/admin/updateGroup/module/'

/*###################################################
################### GET and POST ####################
###################################################*/

async function getData (_path, _id = ''){
    const response = await fetch(_path + _id);

    return response.json()
}

async function postData (_path, _data){
    const response = await fetch(_path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(_data)
    });

    return response.json()
}

var whatToUpdate = 'Participants'

setInterval(() => {
    getData(_pathIntervalOneGroup, document.getElementById('groupId').value + '/' + whatToUpdate.toLowerCase()).then(resp => {

        if(resp.newParticipants) document.getElementById('tableParticipantsBody').innerHTML = resp.newParticipants
        else if(resp.newModules) document.getElementById('tableModulesBody').innerHTML = resp.newModules
        else if(resp.newConfigs){
            document.getElementById('floatingConfigsSituation').value = resp.newConfigs.situation
            document.getElementById('floatingConfigsMaxTime').value = resp.newConfigs.maxTime
            document.getElementById('floatingConfigsDuration').value = resp.newConfigs.duration
            document.getElementById('floatingConfigsDate').value = resp.newConfigs.date
            document.getElementById('floatingConfigsTime').value = resp.newConfigs.time
            document.getElementById('floatingConfigsPhase').value = resp.newConfigs.phase
            document.getElementById('floatingConfigsFinal').value = resp.newConfigs.final
            document.getElementById('floatingConfigsInfo').value = resp.newConfigs.info
        }
        else{
            //erro
        }
    }).catch(err => {
        console.log(err)
    })
}, 2000)

function changeRadio(value){
    whatToUpdate = value

    let valueArray = value == 'Participants' ? ['Participants', 'Modules', 'Configs'] : value == 'Modules' ? ['Modules', 'Participants', 'Configs'] : ['Configs', 'Participants', 'Modules']

    document.getElementById('div' + valueArray[0]).classList.remove('d-none')

    document.getElementById('div' + valueArray[1]).classList.add('d-none')

    document.getElementById('div' + valueArray[2]).classList.add('d-none')
}

function changeCheckboxParticipants(checkElm){

    let allElm = document.getElementById('tableParticipants').getElementsByClassName(checkElm.value)

    if(checkElm.checked){
        for(oneElm of allElm){
            oneElm.classList.remove('d-none')
        }
    }
    else{
        for(oneElm of allElm){
            oneElm.classList.add('d-none')
        }
    }
}

function showModalUpdateGroupConfigs(elm){

    let newElm = elm.children[0].cloneNode(true),
        divElm = document.getElementById('divContentToEdit')

    newElm.children[0].id = 'new' + newElm.children[0].id
    newElm.children[1].htmlFor = 'new' + newElm.children[1].htmlFor

    newElm.children[0].value = elm.children[0].children[0].value

    newElm.children[0].classList.remove('form-disabled')

    divElm.removeChild(divElm.children[0]);

    divElm.appendChild(newElm)

    new bootstrap.Modal(document.getElementById('modalUpdateGroupConfigs'), {
        keyboard: false
    }).show()
}

function updateGroup(){
    let contentToUpdate = document.getElementById('divContentToEdit').children[0].children[0],
        config = contentToUpdate.id.split('Configs')[1],
        dataToSend = {id: document.getElementById('groupId').value}
    
    dataToSend[config[0].toLowerCase() + config.slice(1)] = contentToUpdate.value

    postData(_pathUpdateGroup, dataToSend).then(resp => {

        if(resp.err){
            document.getElementById('errUpdateGroupConfigs').classList.remove('d-none')
        }
        else{
            document.getElementById('errUpdateGroupConfigs').classList.add('d-none')
        }

    }).catch(err => {
        console.log(err)
    })
}

function showModalUpdateGroupModule(name){
    //_pathUpdateGroupModule

    getData(_pathUpdateGroupModule, document.getElementById('groupId').value + '/' + name).then(resp => {
    
        document.getElementById('modalUpdateGroupModulesName').value = resp.name
        document.getElementById('modalUpdateGroupModulesTitle').innerHTML = resp.letter + ' Editar ' + resp.name + ' ' + resp.letter
        document.getElementById('floatingModulesPhase').innerHTML = ' <option>'+ resp.phase +'</option>'
        document.getElementById('floatingModulesIsDone').value = resp.isDone.toString()
        
    }).catch(err => {
        console.log(err)
    })

    new bootstrap.Modal(document.getElementById('modalUpdateGroupModules'), {
        keyboard: false
    }).show()
    
}

function updateGroupModule(){
    let dataToSend = {
        idGroup: document.getElementById('groupId').value,
        name: document.getElementById('modalUpdateGroupModulesName').value,
        isDone: document.getElementById('floatingModulesIsDone').value == 'true' ? true : false
    }

    postData(_pathUpdateGroupModule, dataToSend).then(resp => {
    
        if(resp.err){
            document.getElementById('errUpdateGroupModules').classList.remove('d-none')
        }
        else{
            document.getElementById('errUpdateGroupModules').classList.add('d-none')
        }
        
    }).catch(err => {
        console.log(err)
        document.getElementById('errUpdateGroupModules').classList.remove('d-none')
    })
}






