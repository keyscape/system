
var timeCountdownGama = timeBlockDefault,
    intervalCountdownGama

function gamaSubmit(){
    let front = document.getElementById('floatingInputGamaFront'),
        back = document.getElementById('floatingInputGamaBack')

    if(document.querySelector('input[name="gamaRadio"]:checked').value == '3' && ((front.value == '8' && back.value == '6') || (front.value == '6' && back.value == '8'))){

        document.getElementById('buttonGamaSubmit').style.backgroundColor = "#198754"

        setTimeout(() => {
            moduleDone('gama')
        }, 1000);

    }
    else{
        document.getElementById('buttonGamaSubmit').disabled = true
        document.getElementById('buttonGamaSubmit').style.backgroundColor = "#dc3545"

        intervalCountdownGama = setInterval(countdownGama, 1000);
        document.getElementById('countdownGama').classList.remove('d-none')
    }
}

function countdownGama(){
    timeCountdownGama--;
				
    if(timeCountdownGama < 1){
        document.getElementById('buttonGamaSubmit').disabled = false
        document.getElementById('buttonGamaSubmit').style.backgroundColor = ""

        document.getElementById('countdownGama').classList.add('d-none')

        timeCountdownGama = timeBlockDefault

        clearInterval(intervalCountdownGama)
    }
    
    document.getElementById('countdownGama').innerHTML = timeCountdownGama
}