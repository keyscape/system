

function changeQuestion(index, action){

	let oneModal = bootstrap.Modal.getInstance(gebid('modalQuestion' + index))

	let omegaModuleSize = gebid('omegaModuleSize').value

	if(action == 'prev'){
		try{
			new bootstrap.Modal(gebid('modalQuestion' + (index - 1)), {
				keyboard: false
			}).show()
		}
		catch(err){
			new bootstrap.Modal(gebid('modalQuestion' + (omegaModuleSize - 1)), {
				keyboard: false
			}).show()
		}		
		finally{
			oneModal.hide();
		}

	}
	else if(action == 'next'){
		try{
			new bootstrap.Modal(gebid('modalQuestion' + (index + 1)), {
				keyboard: false
			}).show()
		}
		catch(err){
			new bootstrap.Modal(gebid('modalQuestion0'), {
				keyboard: false
			}).show()
		}		
		finally{
			oneModal.hide();
		}
	}
}

function ansQuestion(num, letter){
	gebid('descriptionQuestion' + num).innerHTML = letter
	gebid('buttonQuestion' + num).classList.remove('qomega')
}