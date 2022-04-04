var miRes,
    miLast,
    timeCountdownMi = timeBlockDefault,
    intervalCountdownMi

getMiData()

function getMiData(){

    let i = 0,
        resArray = '['

    try{
        while(true){
            resArray += '[' + gebid('resMi' + i).value + '],'
            i++
        }

    }
    catch(err){
        //console.log(err)
    }
    finally{
        miRes = JSON.parse(resArray.slice(0, -1) + ']')
        miLast = miRes.map(x => x.map(x => x)).map(x => x.fill(-1))
    }
}

function miChange(indexInfo, indexPerson, value){

    try{
        let i = 0
        while(true){
            document.getElementById('floatingSelectMi' + i + indexInfo).getElementsByTagName('option')[parseInt(value) + 1].disabled = true
            document.getElementById('floatingSelectMi' + i + indexInfo).getElementsByTagName('option')[miLast[indexPerson][indexInfo] + 1].disabled = false
            i++
        }
    }
    catch(err){
        miLast[indexPerson][indexInfo] = parseInt(value)
    }
}

function miSubmit(){

    let isOk = true

    for(onePerson in miRes){
        for(oneRes in miRes[onePerson]){
            if(miRes[onePerson][oneRes] != document.getElementById('floatingSelectMi' + onePerson + oneRes).value){
                isOk = false
                break
            }
        }
        if(!isOk) break
    }

    if(isOk) {
        document.getElementById('buttonMiSubmit').style.backgroundColor = "#198754"

        setTimeout(() => {
            moduleDone('mi')
        }, 1000);
    }
    else {
        document.getElementById('buttonMiSubmit').disabled = true
        document.getElementById('buttonMiSubmit').style.backgroundColor = "#dc3545"

        intervalCountdownMi = setInterval(countdownMi, 1000);
        document.getElementById('countdownMi').classList.remove('d-none')
    }
}

function countdownMi(){
    timeCountdownMi--;
				
    if(timeCountdownMi < 1){
        document.getElementById('buttonMiSubmit').disabled = false
        document.getElementById('buttonMiSubmit').style.backgroundColor = ""

        document.getElementById('countdownMi').classList.add('d-none')

        timeCountdownMi = timeBlockDefault

        clearInterval(intervalCountdownMi)
    }
    
    document.getElementById('countdownMi').innerHTML = timeCountdownMi
}

function completeMi(){
    for(onePerson in miRes){
        for(oneRes in miRes[onePerson]){
            document.getElementById('floatingSelectMi' + onePerson + oneRes).value =  miRes[onePerson][oneRes]
        }
    }
}