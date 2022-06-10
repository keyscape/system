

const 	_pathUpdateInitPage = '/room10c/update/init/',
		_pathUpdateFinalPage = '/room10c/update/final/',
		_pathModuleDone = '/room10c/moduleDone/',
		_pathModuleDoneOmega = '/room10c/moduleDoneOmega/'

const	phaseGroup = gebid('phaseGroup').value,
		omegaReady = gebid('omegaReady').value == 'true',
		timeBlockDefault = 10

var modulesDone = JSON.parse(gebid('modulesDone').value),
	timeSeconds = parseInt(gebid('timeSeconds').value)

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
		new bootstrap.Modal(gebid('omegaModule'), {
			keyboard: false
		}).show()
	}
}

function loadOmegaIntro(){
	if(phaseGroup == 'omega'){
		new bootstrap.Modal(gebid('modalOmegaIntro'), {
			keyboard: false
		}).show()
	}
}

function loadIntro(){
	if(phaseGroup == 'init'){
		new bootstrap.Modal(gebid('file1Modal'), {
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

var btnSnd1 = new Audio('/system10c/assets/sounds/btn0.mp3'),
	btnSnd2 = new Audio('/system10c/assets/sounds/btn1.mp3')

btnSnd1.volume = 0.15;
btnSnd2.volume = 0.15;

window.onclick = clickSound;

function changeVolume(volume){
	gebid('spanVolume').innerHTML = Math.ceil(((Math.exp(volume) - 1) / 53.8) * 100)
	ambSnd.volume = (Math.exp(volume) - 1) / 53.8
}

function ambientSound(isChecked) {

	if(isChecked){
		ambSnd = new Audio('/system10c/assets/sounds/amb' + Math.floor(Math.random() * 4) + '.mp3');

		ambSnd.volume = 0.05
		ambSnd.loop = true

		ambSnd.play();

		gebid('pStateAudio').classList.add('d-none')
		gebid('iconPlay').classList.replace('fa-play', 'fa-stop')
	}
	
	else{
		ambSnd.pause();
		gebid('pStateAudio').classList.remove('d-none')
		gebid('iconPlay').classList.replace('fa-stop', 'fa-play')
	}
}

function moduleSound() {
	btnSnd1.play();
}

function clickSound() {
	btnSnd2.play();
}

function staticBack(isChecked) {
	let gifOmega = gebid('gifOmega'),
		imgOmega = gebid('imgOmega'),
		iconBackOmega = gebid('iconBack')

	if(isChecked){
		document.body.classList.replace('backGif', 'backImg');

		gifOmega.classList.add('d-none')
		imgOmega.classList.remove('d-none')

		iconBackOmega.classList.replace('fa-ban', 'fa-check')
	}
	
	else {
		document.body.classList.replace('backImg', 'backGif');
		
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

	gebid(moduleName + 'BodyNot').classList.add('d-none')

	gebid(moduleName + 'BodyDone').classList.remove('d-none')

	gebid(moduleName + 'TagA').classList.replace('bhaskara', 'sridhara')
	gebid(moduleName + 'TitleCard').classList.replace('bhaskara', 'sridhara')

	gebid(moduleName + 'Module').getElementsByClassName('modal-content')[0].classList.replace('bhaskara', 'sridhara')
	gebid(moduleName + 'Module').getElementsByClassName('modal-header')[0].classList.replace('bhaskara', 'sridhara')
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

	getData(_pathUpdateInitPage, gebid('idGroup').value).then(resp => {

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
			clog('err')
		}

	}).catch(err => {
		clog(err)
	})
}

function updateFinalPage(){

	timeSeconds -= 2

	gebid('timeSecondsShow').innerHTML = (timeSeconds / 60).toFixed(2)

	getData(_pathUpdateFinalPage, gebid('idGroup').value).then(resp => {

		if(!resp.err){
			if(resp.phase != phaseGroup){
				location.reload()
			}
		}
		else{
			clog('err')
		}

	}).catch(err => {
		clog(err)
	})
}

function sendOmega(){
	try{
		let allId = JSON.parse(gebid('arrayIdOmegaModule').value),
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
			clog(err)
			location.reload()
		})

	}
	catch(err){
		gebid('errOmegaModule').classList.remove('d-none')
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
