var timeCountdownSigma = timeBlockDefault,
    intervalCountdownSigma

function sigmaSubmit(){
    if(document.getElementById('floatingInputSigmaRes').value == '94956'){
        document.getElementById('buttonSigmaSubmit').style.backgroundColor = "#198754"

        setTimeout(() => {
            moduleDone('sigma')
        }, 1000);
    }
    else{
        document.getElementById('buttonSigmaSubmit').disabled = true
        document.getElementById('buttonSigmaSubmit').style.backgroundColor = "#dc3545"

        intervalCountdownSigma = setInterval(countdownSigma, 1000);
        document.getElementById('countdownSigma').classList.remove('d-none')
    }
}

function countdownSigma(){
    timeCountdownSigma--;
                    
    if(timeCountdownSigma < 1){
        document.getElementById('buttonSigmaSubmit').disabled = false
        document.getElementById('buttonSigmaSubmit').style.backgroundColor = ""
    
        document.getElementById('countdownSigma').classList.add('d-none')
    
        timeCountdownSigma = timeBlockDefault

        clearInterval(intervalCountdownSigma)
    }
    
    document.getElementById('countdownSigma').innerHTML = timeCountdownSigma

}
