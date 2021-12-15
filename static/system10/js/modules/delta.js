
var deltaBlocked = false

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

        deltaBlocked = true
        document.getElementById('countdownDelta').classList.remove('d-none')
    }
}

