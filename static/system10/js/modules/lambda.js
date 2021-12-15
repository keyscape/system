var lambdaBlocked = false

function lambdaSubmit(){

    for(i = 1; i <= 24; i++){
        if(document.getElementsByName('lambdaRadio')[i].checked){
            if(document.getElementsByName('lambdaRadio')[i].value == '14'){
                document.getElementById('buttonLambdaSubmit').style.backgroundColor = "#198754"

                setTimeout(() => {
                    moduleDone('lambda')
                }, 1000); 

                break;
            }
            else{
                document.getElementById('buttonLambdaSubmit').disabled = true
                document.getElementById('buttonLambdaSubmit').style.backgroundColor = "#dc3545"
    
                lambdaBlocked = true
                document.getElementById('countdownLambda').classList.remove('d-none')

                break;
            }
        }
    }
}