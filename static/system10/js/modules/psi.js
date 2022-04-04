var psiRes = [13],
	psiCount = 1;

function psiReset(){
	for(allId = 0; allId < 16; allId++){
		document.getElementById('btn-check-psi-' + (allId + 1)).disabled = false
		document.getElementById('btn-check-psi-' + (allId + 1)).checked = false
	}

	psiRes = [13]
	psiCount = 1

	document.getElementById('btn-check-psi-13').checked = "true"
	document.getElementById('btn-check-psi-13').disabled = "true"
}

function psiCheck(checkId){
	let labelCheck = document.getElementById('label-check-psi-' + checkId)
	let inputCheck = document.getElementById('btn-check-psi-' + checkId)

	psiCount++
	inputCheck.disabled = true
	psiRes.push(checkId)

	if(psiCount == 16){

		if(JSON.stringify([13, 16, 2, 7, 10, 12, 3, 9, 1, 15, 6, 5, 8, 14, 11, 4]) === JSON.stringify(psiRes)){

			for(allId = 0; allId < 16; allId++){
				document.getElementById('label-check-psi-' + (allId + 1)).style.backgroundColor = "#198754"
			}

			setTimeout(() => {
                moduleDone('psi')
			}, 1000);

		}
		else{
			for(allId = 0; allId < 16; allId++){
				document.getElementById('label-check-psi-' + (allId + 1)).style.backgroundColor = "#dc3545"
			}

			setTimeout(() => {
				for(allId = 0; allId < 16; allId++){
					document.getElementById('label-check-psi-' + (allId + 1)).style.backgroundColor = ""
					document.getElementById('btn-check-psi-' + (allId + 1)).disabled = false
					document.getElementById('btn-check-psi-' + (allId + 1)).checked = false
				}
	
				psiRes = [13]
				psiCount = 1
			
				document.getElementById('btn-check-psi-13').checked = "true"
				document.getElementById('btn-check-psi-13').disabled = "true"

			}, 1000);

		}

	}

}