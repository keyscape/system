
var timeCountdownBeta = timeBlockDefault,
    intervalCountdownBeta

var resBeta = {
    'front': ['4', '5', '6', 'G'],
    'back': ['8', 'H']
}

function betaSubmit(){
    let front = document.getElementById('floatingInputBetaFront')
    let back = document.getElementById('floatingInputBetaBack')
    let resFront = front.value.toUpperCase().split('')
    let resBack = back.value.toUpperCase().split('')

    if(document.querySelector('input[name="betaRadio"]:checked').value == '4' && front.value.length == 4 && back.value.length == 2 && ((resBeta.front.filter(x => !resFront.includes(x)).concat(resFront.filter(x => !resBeta.front.includes(x))).length + resBeta.back.filter(x => !resBack.includes(x)).concat(resBack.filter(x => !resBeta.back.includes(x))).length) == 0)){

        document.getElementById('buttonBetaSubmit').style.backgroundColor = "#198754"

        setTimeout(() => {
            moduleDone('beta')
        }, 1000);

    }
    else{
        document.getElementById('buttonBetaSubmit').disabled = true
        document.getElementById('buttonBetaSubmit').style.backgroundColor = "#dc3545"

        intervalCountdownBeta = setInterval(countdownBeta, 1000);
        document.getElementById('countdownBeta').classList.remove('d-none')
    }
}

function countdownBeta(){
    timeCountdownBeta--;
				
    if(timeCountdownBeta < 1){
        document.getElementById('buttonBetaSubmit').disabled = false
        document.getElementById('buttonBetaSubmit').style.backgroundColor = ""

        document.getElementById('countdownBeta').classList.add('d-none')

        timeCountdownBeta = timeBlockDefault

        clearInterval(intervalCountdownBeta)
    }
    
    document.getElementById('countdownBeta').innerHTML = timeCountdownBeta
}