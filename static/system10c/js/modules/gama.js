
var timeCountdownGama = timeBlockDefault + 20,
    intervalCountdownGama

function gamaSubmit(){

    if(document.querySelector('input[name="gamaRadio"]:checked').value == '7'){

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

        timeCountdownGama = timeBlockDefault + 20

        clearInterval(intervalCountdownGama)
    }
    
    document.getElementById('countdownGama').innerHTML = timeCountdownGama
}