var kappaRes = [5],
	kappaCount = 1;

function kappaReset(){
	for(allId = 0; allId < 9; allId++){
		document.getElementById('btn-check-kappa-' + (allId + 1)).disabled = false
		document.getElementById('btn-check-kappa-' + (allId + 1)).checked = false
	}

	kappaRes = [5]
	kappaCount = 1

	document.getElementById('btn-check-kappa-5').checked = "true"
	document.getElementById('btn-check-kappa-5').disabled = "true"
}

function kappaCheck(checkId){
	let labelCheck = document.getElementById('label-check-kappa-' + checkId)
	let inputCheck = document.getElementById('btn-check-kappa-' + checkId)

	kappaCount++
	inputCheck.disabled = true
	kappaRes.push(checkId)

	if(kappaCount == 9){

		if(JSON.stringify([5, 1, 9, 4, 3, 8, 6, 2, 7]) === JSON.stringify(kappaRes)){

			for(allId = 0; allId < 9; allId++){
				document.getElementById('label-check-kappa-' + (allId + 1)).style.backgroundColor = "#198754"
			}

			setTimeout(() => {
                moduleDone('kappa')
			}, 1000);

		}
		else{
			for(allId = 0; allId < 9; allId++){
				document.getElementById('label-check-kappa-' + (allId + 1)).style.backgroundColor = "#dc3545"
			}

			setTimeout(() => {
				for(allId = 0; allId < 9; allId++){
					document.getElementById('label-check-kappa-' + (allId + 1)).style.backgroundColor = ""
					document.getElementById('btn-check-kappa-' + (allId + 1)).disabled = false
					document.getElementById('btn-check-kappa-' + (allId + 1)).checked = false
				}
	
				kappaRes = [5]
				kappaCount = 1

				document.getElementById('btn-check-kappa-5').checked = "true"
				document.getElementById('btn-check-kappa-5').disabled = "true"

			}, 1000);

		}

	}

}