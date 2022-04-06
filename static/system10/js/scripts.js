

const 	_pathUpdateInitPage = '/room10c/update/init/',
		_pathUpdateFinalPage = '/room10c/update/final/',
		_pathModuleDone = '/room10c/moduleDone/',
		_pathModuleDoneOmega = '/room10c/moduleDoneOmega/'

const	phaseGroup = document.getElementById('phaseGroup').value,
		omegaReady = document.getElementById('omegaReady').value == 'true',
		timeBlockDefault = 10

var modulesDone = JSON.parse(document.getElementById('modulesDone').value),
	timeSeconds = parseInt(document.getElementById('timeSeconds').value)

if(omegaReady && phaseGroup != 'done'){
	gebid('modalQuestionsBody').classList.add('d-none')
	gebid('modalQuestionsFooter').classList.add('d-none')
	gebid('modalLoading').classList.remove('d-none')
}

window.onload = (event) => {
	if(phaseGroup != 'done'){
		if(phaseGroup == 'omega'){
			if(omegaReady) setInterval(updateFinalPage, 2000);
		}
		else if(phaseGroup == 'delta'){
			setInterval(updateFinalPage, 2000);
		}
		else{
			setInterval(updateInitPage, 2000);
		}
	}
};

function loadFinal(){
	if(phaseGroup == 'done'){
		new bootstrap.Modal(document.getElementById('omegaModule'), {
			keyboard: false
		}).show()
	}
}

  
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  	return new bootstrap.Popover(popoverTriggerEl)
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

/*###################################################
################# Sounds & Back #####################
###################################################*/

var ambSnd;

var btnSnd1 = new Audio('/system10/assets/sounds/btn0.mp3'),
	btnSnd2 = new Audio('/system10/assets/sounds/btn1.mp3')

btnSnd1.volume = 0.01;
btnSnd2.volume = 0.01;

window.onclick = clickSound;

function changeVolume(volume){
	document.getElementById('spanVolume').innerHTML = Math.ceil(((Math.exp(volume) - 1) / 53.8) * 100)
	ambSnd.volume = (Math.exp(volume) - 1) / 53.8
}

function ambientSound(isChecked) {

	if(isChecked){
		ambSnd = new Audio('/system10/assets/sounds/amb' + Math.floor(Math.random() * 4) + '.mp3');

		ambSnd.volume = 0.05
		ambSnd.loop = true

		ambSnd.play();

		document.getElementById('pStateAudio').classList.add('d-none')
		document.getElementById('iconPlay').classList.replace('fa-play', 'fa-stop')
	}
	
	else{
		ambSnd.pause();
		document.getElementById('pStateAudio').classList.remove('d-none')
		document.getElementById('iconPlay').classList.replace('fa-stop', 'fa-play')
	}
}

function moduleSound() {
	btnSnd1.play();
}

function clickSound() {
	btnSnd2.play();
}

function staticBack(isChecked) {
	let gifOmega = document.getElementById('gifOmega'),
		imgOmega = document.getElementById('imgOmega'),
		iconBackOmega = document.getElementById('iconBack')

	if(isChecked){
		document.body.classList.replace('backGif', 'backImg');

		gifOmega.classList.add('d-none')
		imgOmega.classList.remove('d-none')

		iconBackOmega.classList.replace('fa-ban', 'fa-check')
	}
	
	else {
		document.body.classList.replace('backGif', 'backImg');
		
		gifOmega.classList.remove('d-none')
		imgOmega.classList.add('d-none')

		iconBackOmega.classList.replace('fa-check', 'fa-ban')
	}

}

/*###################################################
####################### Get #########################
###################################################*/

async function getData (_path, _id = ''){
    const response = await fetch(_path + _id);

    return response.json()
}

async function postData (_path, _data){
    const response = await fetch(_path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(_data)
    });

    return response.json()
}

function moduleDoneVisual(moduleName){
	modulesDone.push(moduleName)

	document.getElementById(moduleName + 'BodyNot').classList.add('d-none')

	document.getElementById(moduleName + 'BodyDone').classList.remove('d-none')

	document.getElementById(moduleName + 'TagA').classList.replace('bhaskara', 'sridhara')
	document.getElementById(moduleName + 'TitleCard').classList.replace('bhaskara', 'sridhara')
}

function moduleDone(moduleName){

	let dataToSend = {
		id: gebid('idGroup').value,
		moduleName: moduleName
	}

	postData(_pathModuleDone, dataToSend).then(resp => {

		if(!resp.err){
			moduleDoneVisual(moduleName)
		}
		else clog('Err')

	}).catch(err => {
		clog('Err')
	})
}

function updateInitPage(){
	timeSeconds -= 2

	gebid('timeSecondsShow').innerHTML = (timeSeconds / 60).toFixed(2)

	getData(_pathUpdateInitPage, document.getElementById('idGroup').value).then(resp => {

		if(!resp.err){
			if(resp.phase != phaseGroup){
				location.reload()
			}
			else{
				for(oneModule of resp.modules){
					if(oneModule.isDone && !modulesDone.includes(oneModule.name)) moduleDoneVisual(oneModule.name)
				}
			}
		}
		else{
			console.log('err')
		}

	}).catch(err => {
		console.log(err)
	})
}

function updateFinalPage(){

	timeSeconds -= 2

	gebid('timeSecondsShow').innerHTML = (timeSeconds / 60).toFixed(2)

	getData(_pathUpdateFinalPage, document.getElementById('idGroup').value).then(resp => {

		if(!resp.err){
			if(resp.phase != phaseGroup){
				location.reload()
			}
		}
		else{
			console.log('err')
		}

	}).catch(err => {
		console.log(err)
	})
}

function changeQuestion(index, action){

	let oneModal = bootstrap.Modal.getInstance(document.getElementById('modalQuestion' + index))

	let omegaModuleSize = document.getElementById('omegaModuleSize').value

	if(action == 'prev'){
		try{
			new bootstrap.Modal(document.getElementById('modalQuestion' + (index - 1)), {
				keyboard: false
			}).show()
		}
		catch(err){
			new bootstrap.Modal(document.getElementById('modalQuestion' + (omegaModuleSize - 1)), {
				keyboard: false
			}).show()
		}		
		finally{
			oneModal.hide();
		}

	}
	else if(action == 'next'){
		try{
			new bootstrap.Modal(document.getElementById('modalQuestion' + (index + 1)), {
				keyboard: false
			}).show()
		}
		catch(err){
			new bootstrap.Modal(document.getElementById('modalQuestion0'), {
				keyboard: false
			}).show()
		}		
		finally{
			oneModal.hide();
		}
	}
}

function ansQuestion(num, letter){
	document.getElementById('descriptionQuestion' + num).innerHTML = letter
	document.getElementById('buttonQuestion' + num).classList.remove('border-qomega')
}

function sendOmega(){
	try{
		let allId = JSON.parse(document.getElementById('arrayIdOmegaModule').value),
			dataToSend = {omega: {}}
	
		for(oneId of allId){
			dataToSend.omega[oneId] = document.querySelector('input[name="' + oneId + '"]:checked').value
		}

		gebid('modalQuestionsBody').classList.add('d-none')
		gebid('modalQuestionsFooter').classList.add('d-none')
		gebid('modalLoading').classList.remove('d-none')
		
		setInterval(updateFinalPage, 2000);

		dataToSend.idParticipant = gebid('idParticipant').value

		postData(_pathModuleDoneOmega, dataToSend).then(resp => {

			if(!resp.reload){
				clog('Só aguardar')
			}
			else{
				location.reload()
			}
			
		}).catch(err => {
			console.log(err)
			location.reload()
		})

	}
	catch(err){
		console.log(err)
		document.getElementById('errOmegaModule').classList.remove('d-none')
	}
}

function clog(content){
	console.log(content)
}

function gebid(elm){
	return document.getElementById(elm)
}

function changeVoice(elm){

	//fetch elm.id

	//if success reload

}
