/* function gamaCheck(id){
    for(i = 1; i <= 5; i++){
        if(i != id) document.getElementById('btn-check-gama-' + i).checked = false
    }
} */

var betaBlocked = false

var resBeta = {
    'front': ['4', '5', '6', 'G'],
    'back': ['8', 'H']
}

function betaSubmit(){
    let shape = -1
    let front = document.getElementById('floatingInputBetaFront')
    let back = document.getElementById('floatingInputBetaBack')

    for(i = 1; i <= 5; i++){
        if(document.getElementById('btn-check-beta-' + i).checked) shape = i
    }

    if(shape == 4 && front.value.length == 4 && back.value.length == 2){

        let resFront = front.value.toUpperCase().split('')
        let resBack = back.value.toUpperCase().split('')

        if((resBeta.front.filter(x => !resFront.includes(x)).concat(resFront.filter(x => !resBeta.front.includes(x))).length + resBeta.back.filter(x => !resBack.includes(x)).concat(resBack.filter(x => !resBeta.back.includes(x))).length) == 0){
        
            document.getElementById('buttonBetaSubmit').style.backgroundColor = "#198754"

            setTimeout(() => {
                moduleDone('beta')
            }, 1000);

        }
        else{
            document.getElementById('buttonBetaSubmit').disabled = true
            document.getElementById('buttonBetaSubmit').style.backgroundColor = "#dc3545"

            betaBlocked = true
            document.getElementById('countdownBeta').classList.remove('d-none')
        }


    }
    else{
/*         for(i = 1; i <= 5; i++){
            document.getElementById('btn-check-beta-' + i).checked = false
            document.getElementById('btn-check-beta-' + i).disabled = true
            document.getElementById('label-check-beta-' + i).style.backgroundColor = "#dc3545"

        }

        front.disabled = true
        front.style.backgroundColor = "#dc3545"
        back.disabled = true
        back.style.backgroundColor = "#dc3545"

        document.getElementById('buttonBetaSubmit').disabled = true

        betaBlocked = true
        document.getElementById('countdownBeta').classList.remove('d-none') */


        document.getElementById('buttonBetaSubmit').disabled = true
        document.getElementById('buttonBetaSubmit').style.backgroundColor = "#dc3545"

        betaBlocked = true
        document.getElementById('countdownBeta').classList.remove('d-none')
    }
}

//document.getElementById('label-check-kappa-' + (allId + 1)).style.backgroundColor = "#198754"
//document.getElementById('label-check-kappa-' + (allId + 1)).style.backgroundColor = "#dc3545"