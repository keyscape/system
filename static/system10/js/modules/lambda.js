var timeCountdownLambda = timeBlockDefault + 10,
    intervalCountdownLambda

function lambdaSubmit(){

    if(document.querySelector('input[name="lambdaRadio"]:checked').value == '14'){
        document.getElementById('buttonLambdaSubmit').style.backgroundColor = "#198754"

        setTimeout(() => {
            moduleDone('lambda')
        }, 1000); 
    }
    else{
        document.getElementById('buttonLambdaSubmit').disabled = true
        document.getElementById('buttonLambdaSubmit').style.backgroundColor = "#dc3545"

        intervalCountdownLambda = setInterval(countdownLambda, 1000);
        document.getElementById('countdownLambda').classList.remove('d-none')
    }
}

function countdownLambda(){
    timeCountdownLambda--;
                    
    if(timeCountdownLambda < 1){
        document.getElementById('buttonLambdaSubmit').disabled = false
        document.getElementById('buttonLambdaSubmit').style.backgroundColor = ""
    
        document.getElementById('countdownLambda').classList.add('d-none')
    
        timeCountdownLambda = timeBlockDefault + 10

        clearInterval(intervalCountdownLambda)
    }
    
    document.getElementById('countdownLambda').innerHTML = timeCountdownLambda

}