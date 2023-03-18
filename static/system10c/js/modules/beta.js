
var timeCountdownBeta = timeBlockDefault + 20,
    intervalCountdownBeta

function betaSubmit(){

    if(document.querySelector('input[name="betaRadio"]:checked').value == '5'){

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

        timeCountdownBeta = timeBlockDefault + 20

        clearInterval(intervalCountdownBeta)
    }
    
    document.getElementById('countdownBeta').innerHTML = timeCountdownBeta
}