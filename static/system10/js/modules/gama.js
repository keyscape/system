/* function gamaCheck(id){
    for(i = 1; i <= 5; i++){
        if(i != id) document.getElementById('btn-check-gama-' + i).checked = false
    }
} */

var gamaBlocked = false

function gamaSubmit(){
    let shape = -1
    let front = document.getElementById('floatingInputGamaFront')
    let back = document.getElementById('floatingInputGamaBack')

    for(i = 1; i <= 5; i++){
        if(document.getElementById('btn-check-gama-' + i).checked) shape = i
    }

    if(shape == 3){
        if((front.value == '8' && back.value == '6') || (front.value == '6' && back.value == '8')){
/*             for(i = 1; i <= 5; i++){
				document.getElementById('label-check-gama-' + i).style.backgroundColor = "#198754"
                front.style.backgroundColor = "#198754"
                back.style.backgroundColor = "#198754"
			} */

            document.getElementById('buttonGamaSubmit').style.backgroundColor = "#198754"

			setTimeout(() => {
                moduleDone('gama')
			}, 1000);

        }
        else{
/*             for(i = 1; i <= 5; i++){
                document.getElementById('btn-check-gama-' + i).checked = false
                document.getElementById('btn-check-gama-' + i).disabled = true
                document.getElementById('label-check-gama-' + i).style.backgroundColor = "#dc3545"

            }

            front.disabled = true
            front.style.backgroundColor = "#dc3545"
            back.disabled = true
            back.style.backgroundColor = "#dc3545" */

            document.getElementById('buttonGamaSubmit').disabled = true
            document.getElementById('buttonGamaSubmit').style.backgroundColor = "#dc3545"

            gamaBlocked = true
            document.getElementById('countdownGama').classList.remove('d-none')
        }

    }
    else{
/*         for(i = 1; i <= 5; i++){
            document.getElementById('btn-check-gama-' + i).checked = false
            document.getElementById('btn-check-gama-' + i).disabled = true
            document.getElementById('label-check-gama-' + i).style.backgroundColor = "#dc3545"

        }

        front.disabled = true
        front.style.backgroundColor = "#dc3545"
        back.disabled = true
        back.style.backgroundColor = "#dc3545"

        document.getElementById('buttonGamaSubmit').disabled = true

        gamaBlocked = true
        document.getElementById('countdownGama').classList.remove('d-none') */


        document.getElementById('buttonGamaSubmit').disabled = true
        document.getElementById('buttonGamaSubmit').style.backgroundColor = "#dc3545"

        gamaBlocked = true
        document.getElementById('countdownGama').classList.remove('d-none')
    }
}

//document.getElementById('label-check-kappa-' + (allId + 1)).style.backgroundColor = "#198754"
//document.getElementById('label-check-kappa-' + (allId + 1)).style.backgroundColor = "#dc3545"