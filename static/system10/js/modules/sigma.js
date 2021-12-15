var sigmaBlocked = false;

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

        sigmaBlocked = true
        document.getElementById('countdownSigma').classList.remove('d-none')
    }
}