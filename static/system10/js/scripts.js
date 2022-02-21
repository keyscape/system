const pathModuleDone = '/room10c/moduleDone/'
const pathModuleOmegaNext = '/room10c/moduleOmegaNext/'
const pathModuleUpdate = '/room10c/moduleUpdate/'
const pathOmegaUpdate = '/room10c/omegaUpdate/'

var modulesDone = JSON.parse(document.getElementById('modulesDone').value)
var isFinal = JSON.parse(document.getElementById('isFinal').value)

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  	return new bootstrap.Popover(popoverTriggerEl)
})


async function requestGetAjax(_path, _id = '') {
	return new Promise((res, rej) => {
		const xmlhttp = new XMLHttpRequest();

		xmlhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				res(JSON.parse(xmlhttp.responseText));
			}
		};

		xmlhttp.open('GET', _path + _id, true);
		xmlhttp.send();
	});
}

function moduleDone(moduleName){

	requestGetAjax(pathModuleDone, document.getElementById('code88').value + '/' + moduleName).then((resData) => {
        if(!resData.err){

			resData.isUpdate
			resData.newPhase

			if(resData.isUpdate){
				location.reload()
			}
			else{
			
				let moduleTagA = document.getElementById(moduleName + 'TagA')
				let moduleTitleCard = document.getElementById(moduleName + 'TitleCard')
				let moduleBodyDone = document.getElementById(moduleName + 'BodyDone')
				let moduleBodyNot = document.getElementById(moduleName + 'BodyNot')
			
				moduleTagA.classList.remove('bhaskara')
				moduleTagA.classList.add('sridhara')
			
				moduleTitleCard.classList.remove('bhaskara')
				moduleTitleCard.classList.add('sridhara')
				
				moduleBodyNot.classList.add('d-none')
				moduleBodyDone.classList.remove('d-none')
	
				modulesDone.push(moduleName)
			
				//$('#' + moduleName + 'Module').modal('hide')
			}

            
        }
		else{
			conbsole.log('Erroooooooo')
            
        }
    });
}

var timeDefault = 10;
var timeCountdownGama = timeDefault
var timeCountdownMi = timeDefault
var timeCountdownSigma = timeDefault
var timeCountdownLambda = timeDefault + 10
var timeCountdownBeta = timeDefault
var timeCountdownDelta = timeDefault

setInterval(() => {

	//console.log(!document.getElementById('isDone').value)
	if(!JSON.parse(document.getElementById('isDone').value)){

		if(isFinal){
			requestGetAjax(pathOmegaUpdate, document.getElementById('code88').value + '/' + document.getElementById('namePerson').value).then((resData) => {


				if(!resData.err){
					if(resData.reloadPage){
						location.reload()
					}
					else{
						document.getElementById('finalTime').innerHTML = resData.finalTime

						if(resData.nextOmegaPhase){

							console.log(resData.contentOmega)
							
							document.getElementById('divOmegaContent').innerHTML = resData.contentOmega[0]
							document.getElementById('buttonOmegaSubmit1').innerHTML = resData.contentOmega[1]
							document.getElementById('buttonOmegaSubmit2').innerHTML = resData.contentOmega[2]
							document.getElementById('buttonOmegaSubmit3').innerHTML = resData.contentOmega[3]
							document.getElementById('buttonOmegaSubmit4').innerHTML = resData.contentOmega[4]
			
							
							document.getElementById('omegaContent').classList.remove('d-none')
							document.getElementById('omegaLoading').classList.add('d-none')

						}
					}
				}
			});
		}
	
		else{
			if(gamaBlocked){
				timeCountdownGama--;
				
				
				if(timeCountdownGama == 0){
					document.getElementById('buttonGamaSubmit').disabled = false
					document.getElementById('buttonGamaSubmit').style.backgroundColor = ""
			
					gamaBlocked = false
					document.getElementById('countdownGama').classList.add('d-none')
	
					timeCountdownGama = timeDefault
				}
				
				document.getElementById('countdownGama').innerHTML = timeCountdownGama
			}
	
			if(miBlocked){
				timeCountdownMi--;
				
				
				if(timeCountdownMi == 0){
					document.getElementById('buttonMiSubmit').disabled = false
					document.getElementById('buttonMiSubmit').style.backgroundColor = ""
			
					miBlocked = false
					document.getElementById('countdownMi').classList.add('d-none')
	
					timeCountdownMi = timeDefault
				}
				
				document.getElementById('countdownMi').innerHTML = timeCountdownMi
			}
	
			if(sigmaBlocked){
				timeCountdownSigma--;
				
				
				if(timeCountdownSigma == 0){
					document.getElementById('buttonSigmaSubmit').disabled = false
					document.getElementById('buttonSigmaSubmit').style.backgroundColor = ""
			
					sigmaBlocked = false
					document.getElementById('countdownSigma').classList.add('d-none')
	
					timeCountdownSigma = timeDefault
				}
				
				document.getElementById('countdownSigma').innerHTML = timeCountdownSigma
			}
	
			if(lambdaBlocked){
				timeCountdownLambda--;
				
				
				if(timeCountdownLambda == 0){
					document.getElementById('buttonLambdaSubmit').disabled = false
					document.getElementById('buttonLambdaSubmit').style.backgroundColor = ""
			
					lambdaBlocked = false
					document.getElementById('countdownLambda').classList.add('d-none')
	
					timeCountdownLambda = timeDefault + 10
				}
				
				document.getElementById('countdownLambda').innerHTML = timeCountdownLambda
			}
	
			if(betaBlocked){
				timeCountdownBeta--;
				
				
				if(timeCountdownBeta == 0){
					document.getElementById('buttonBetaSubmit').disabled = false
					document.getElementById('buttonBetaSubmit').style.backgroundColor = ""
			
					betaBlocked = false
					document.getElementById('countdownBeta').classList.add('d-none')
	
					timeCountdownBeta = timeDefault
				}
				
				document.getElementById('countdownBeta').innerHTML = timeCountdownBeta
			}
	
			if(deltaBlocked){
				timeCountdownDelta--;
				
				
				if(timeCountdownDelta == 0){
					document.getElementById('buttonDeltaSubmit').disabled = false
					document.getElementById('buttonDeltaSubmit').style.backgroundColor = ""
			
					deltaBlocked = false
					document.getElementById('countdownDelta').classList.add('d-none')
	
					timeCountdownDelta = timeDefault
				}
				
				document.getElementById('countdownDelta').innerHTML = timeCountdownDelta
			}
	
			requestGetAjax(pathModuleUpdate, document.getElementById('code88').value).then((resData) => {
				if(!resData.err){
					if(resData.newPhase != parseInt(document.getElementById('phase').value)){
						location.reload()
					}
					else{
						document.getElementById('finalTime').innerHTML = resData.finalTime
	
						if(resData.modulesDone.length != modulesDone.length){
			
							let difference = resData.modulesDone.filter(x => !modulesDone.includes(x)).concat(modulesDone.filter(x => !resData.modulesDone.includes(x)));
				
							console.log(difference)
				
							for(diffModule of difference){
			
								let moduleTagA = document.getElementById(diffModule + 'TagA')
								let moduleTitleCard = document.getElementById(diffModule + 'TitleCard')
								let moduleBodyDone = document.getElementById(diffModule + 'BodyDone')
								let moduleBodyNot = document.getElementById(diffModule + 'BodyNot')
							
								moduleTagA.classList.remove('bhaskara')
								moduleTagA.classList.add('sridhara')
							
								moduleTitleCard.classList.remove('bhaskara')
								moduleTitleCard.classList.add('sridhara')
								
								moduleBodyNot.classList.add('d-none')
								moduleBodyDone.classList.remove('d-none')
					
								modulesDone.push(diffModule)
							
								//$('#' + diffModule + 'Module').modal('hide')
							}
			
						}
						else{
							console.log('Vida que segue')
						}
					}
	
				}
				else{
					console.log('Errrrroooooooo')
				}
	
				
			});
		}
	}

}, 1000);

function staticBack(isChecked) {
	let gifOmega = document.getElementById('gifOmega'),
		imgOmega = document.getElementById('imgOmega')

	if(isChecked){
		document.body.classList.remove('backGif');
		document.body.classList.add('backImg');

		gifOmega.classList.add('d-none')
		imgOmega.classList.remove('d-none')
	}

	else {
		document.body.classList.add('backGif');
		document.body.classList.remove('backImg');

		gifOmega.classList.remove('d-none')
		imgOmega.classList.add('d-none')
	}

}

var ambSnd;

var btnSnd1 = new Audio('/system10/assets/sounds/btn1.wav'),
	btnSnd2 = new Audio('/system10/assets/sounds/btn2.wav'),
	btnSnd3 = new Audio('/system10/assets/sounds/btn3.wav');

btnSnd1.volume = 0.01;
btnSnd2.volume = 0.01;
btnSnd3.volume = 0.03;

function playAmbient(isChecked) {

	if(isChecked){
		ambSnd = new Audio('/system10/assets/sounds/amb' + (Math.floor(Math.random() * 6) + 1) + '.mp3');

		ambSnd.volume = 0.03
		ambSnd.loop = true

		ambSnd.play();
	}

	else{
		ambSnd.pause();
	}
}

function playButton() {
	btnSnd1.play();
}

window.onclick = playClick;

function playClick() {
	btnSnd2.play();
}