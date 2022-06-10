const   _pathCreateGroup = '/room10c/admin/createGroup/',
        _pathIntervalAllGroups = '/room10c/admin/intervalAllGroups/'


document.getElementById('navItemAdmin').classList.add('active')

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

intervalAllGroups()

setInterval(intervalAllGroups, 5000)

function intervalAllGroups(){
    getData(_pathIntervalAllGroups, document.getElementById('nGroups').value).then(resp => {
        if(resp.att){
            document.getElementById('buttonUpdatePage').classList.remove('d-none')
        }

        document.getElementById('divGroupsContent').innerHTML = resp.newGroups
        updateGroupButtons()
        
    }).catch(err => {
        console.log(err)
    })
}

function updateGroupButtons(){

    let situationValue = document.getElementById('floatingGroupsSituation').value,
        dateValue = document.getElementById('floatingGroupsDate').value,
        allDivs = document.getElementById('divGroupsContent').children

    for(oneDiv of allDivs){
        let allClasses = oneDiv.classList

        if(allClasses.contains(situationValue) && allClasses.contains(dateValue)) 
            allClasses.remove('d-none')
        else 
            allClasses.add('d-none')
    }
}

function showModalCreateGroup(){

    let dateNow = new Date()

    document.getElementById('floatingCreateGroupDate').value = dateNow.getFullYear() + '-' + (dateNow.getMonth() < 9 ? '0' + (dateNow.getMonth() + 1) : dateNow.getMonth() + 1) + '-' + (dateNow.getDate() < 10 ? '0' + dateNow.getDate() : dateNow.getDate())

    document.getElementById('errModalCreateGroup').classList.add('d-none')

    new bootstrap.Modal(document.getElementById('modalCreateGroup'), {
        keyboard: false
    }).show()
}

function createGroup(){

    let dataToSend = {
        date: document.getElementById('floatingCreateGroupDate').value,
        time: document.getElementById('floatingCreateGroupTime').value,
        maxTime: document.getElementById('floatingCreateGroupMaxTime').value,
        info: document.getElementById('floatingCreateGroupInfo').value
    }

    let isValid = true

    if(dataToSend.date == ''){
        isValid = false
        document.getElementById('floatingCreateGroupDate').classList.add('is-invalid')
    }
    else document.getElementById('floatingCreateGroupDate').classList.remove('is-invalid')

    if(dataToSend.maxTime < 20 || dataToSend.maxTime > 120){
        isValid = false
        document.getElementById('floatingCreateGroupMaxTime').classList.add('is-invalid')
    }
    else document.getElementById('floatingCreateGroupMaxTime').classList.remove('is-invalid')
    
    if(isValid){

        postData(_pathCreateGroup, dataToSend).then(resp => {

            if(resp.err) document.getElementById('errModalCreateGroup').classList.remove('d-none')
            else location.reload();

        }).catch(err => {
            console.log(err)
            document.getElementById('errModalCreateGroup').classList.remove('d-none')
        })
    }
}
