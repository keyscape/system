
var timeCountdownDelta = timeBlockDefault,
intervalCountdownDelta

function deltaSubmit(){

    let email = document.getElementById('floatingInputDeltaEmail')
    let pwd = document.getElementById('floatingInputDeltaPwd')

    if(email.value == 'silv_expo@expoente.com' && pwd.value == '35521087'){

        document.getElementById('buttonDeltaSubmit').style.backgroundColor = "#198754"

        setTimeout(() => {
            moduleDone('delta')
        }, 1000);

    }
    else{

        document.getElementById('buttonDeltaSubmit').disabled = true
        document.getElementById('buttonDeltaSubmit').style.backgroundColor = "#dc3545"

        intervalCountdownDelta = setInterval(countdownDelta, 1000);
        document.getElementById('countdownDelta').classList.remove('d-none')
    }
}

function countdownDelta(){
    timeCountdownDelta--;
				
    if(timeCountdownDelta < 1){
        document.getElementById('buttonDeltaSubmit').disabled = false
        document.getElementById('buttonDeltaSubmit').style.backgroundColor = ""

        document.getElementById('countdownDelta').classList.add('d-none')

        timeCountdownDelta = timeBlockDefault

        clearInterval(intervalCountdownDelta)
    }
    
    document.getElementById('countdownDelta').innerHTML = timeCountdownDelta
}