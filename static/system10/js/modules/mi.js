const miRes = {
    "Silvio":   ['1', '5', '3', '2'],
    "Roger":    ['5', '2', '2', '5'],
    "Julia":    ['2', '1', '1', '3'],
    "Sandro":   ['3', '3', '5', '4'],
    "Silvia":   ['4', '4', '4', '1'],
}

var miLast = {
    "Silvio":   ['0', '0', '0', '0'],
    "Roger":    ['0', '0', '0', '0'],
    "Julia":    ['0', '0', '0', '0'],
    "Sandro":   ['0', '0', '0', '0'],
    "Silvia":   ['0', '0', '0', '0'],
}

var miBlocked = false;

function miChange(index, info, name, value){

    for(onePerson in miRes){
        if(onePerson != name){
           document.getElementById('floatingSelectMi' + info + onePerson).getElementsByTagName('option')[value].disabled = true
           document.getElementById('floatingSelectMi' + info + onePerson).getElementsByTagName('option')[miLast[name][index]].disabled = false
        }
    }
    
    miLast[name][index] = value
}

function miSubmit(){
    let allOk = true;

    for(onePerson in miRes){
        if(miRes[onePerson][0] != document.getElementById('floatingSelectMiCargo' + onePerson).value) allOk = false

        if(miRes[onePerson][1] != document.getElementById('floatingSelectMiEmail' + onePerson).value) allOk = false

        if(miRes[onePerson][2] != document.getElementById('floatingSelectMiTelefone' + onePerson).value) allOk = false

        if(miRes[onePerson][3] != document.getElementById('floatingSelectMiBebida' + onePerson).value) allOk = false
 

        if(!allOk) break;
    }

    if(allOk) {
        document.getElementById('buttonMiSubmit').style.backgroundColor = "#198754"

        setTimeout(() => {
            moduleDone('mi')
        }, 1000);
    }
    else {
        document.getElementById('buttonMiSubmit').disabled = true
        document.getElementById('buttonMiSubmit').style.backgroundColor = "#dc3545"

        miBlocked = true
        document.getElementById('countdownMi').classList.remove('d-none')
    }
}