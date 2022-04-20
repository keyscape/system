var alfaRes = [6],
	alfaCount = 1;

function alfaReset(){
	for(allId = 0; allId < 16; allId++){
		document.getElementById('btn-check-alfa-' + (allId + 1)).disabled = false
		document.getElementById('btn-check-alfa-' + (allId + 1)).checked = false
	}

	alfaRes = [6]
	alfaCount = 1

	document.getElementById('btn-check-alfa-6').checked = "true"
	document.getElementById('btn-check-alfa-6').disabled = "true"
}

function alfaCheck(checkId){
	let labelCheck = document.getElementById('label-check-alfa-' + checkId)
	let inputCheck = document.getElementById('btn-check-alfa-' + checkId)
	
	alfaCount++
	inputCheck.disabled = true
	alfaRes.push(checkId)

	if(alfaCount == 16){

		if(JSON.stringify([6, 7, 15, 13, 5, 8, 16, 4, 1, 3, 11, 9, 12, 10, 2, 14]) === JSON.stringify(alfaRes)){

			for(allId = 0; allId < 16; allId++){
				document.getElementById('label-check-alfa-' + (allId + 1)).style.backgroundColor = "#198754"
			}

			setTimeout(() => {
                moduleDone('alfa')
			}, 1000);

		}
		else{
			for(allId = 0; allId < 16; allId++){
				document.getElementById('label-check-alfa-' + (allId + 1)).style.backgroundColor = "#dc3545"
			}

			setTimeout(() => {
				for(allId = 0; allId < 16; allId++){
					document.getElementById('label-check-alfa-' + (allId + 1)).style.backgroundColor = ""
					document.getElementById('btn-check-alfa-' + (allId + 1)).disabled = false
					document.getElementById('btn-check-alfa-' + (allId + 1)).checked = false
				}
	
				alfaRes = [6]
				alfaCount = 1

				document.getElementById('btn-check-alfa-6').checked = "true"
				document.getElementById('btn-check-alfa-6').disabled = "true"

			}, 1000);


		}

	}

}