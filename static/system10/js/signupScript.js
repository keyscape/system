const _pathSignup = '/room10c/signup/'

document.getElementById('navItemSignup').classList.add('active');

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

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


function cpfChange(i){
    var v = i.value;

    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
        i.value = v.substring(0, v.length-1);
        return;
    }

    i.setAttribute("maxlength", "14");

    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
}

function validationEmail(emailStr){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailStr)) return true

    return false
}

function validationRA(numStr) {

    const numLength = numStr.length;
    let nMult = numLength;
    let sum = 0;

    for (let i = 0; i < numLength - 1; i++) {
        sum += parseInt(numStr.charAt(i)) * nMult;
        nMult--;
    }

    let res = (sum * 10) % 11;

    res = res == 10 || res == 11 ? 0 : res;

    return (res == numStr[numLength - 1])

}

function validationCPF(numStr) {

    if(numStr.length == 14){
        numStr = numStr.replace(/[\.\-]/g,'')

        const numLength = numStr.length;
        let nMult = 10,
            sum = 0,
            res1 = 0,
            res2 = 0

        for (let i = 0; i < numLength - 2; i++) {
            sum += parseInt(numStr.charAt(i)) * nMult;
            nMult--;
        }

        res1 = (sum * 10) % 11;
        res1 = res1 == 10 ? 0 : res1;

        nMult = 11;
        sum = 0;

        for (let i = 0; i < numLength - 1; i++) {
            sum += parseInt(numStr.charAt(i)) * nMult;
            nMult--;
        }

        res2 = (sum * 10) % 11;
        res2 = res2 == 10 ? 0 : res2;

        return (res1 == numStr[numLength - 2] && res2 == numStr[numLength - 1])

    }

    return false
}

function isValid(username, password, fullName, email, ra, age, cpf, edu){

    let isValid = true

    if(username.value.length < 2 || username.value.length > 16){
        username.classList.remove('is-valid')
        username.classList.add('is-invalid')
        isValid = false
    }
    else{
        username.classList.remove('is-invalid')
        username.classList.add('is-valid')
    }

    if(password.value.length < 8 || password.value.length > 16){
        password.classList.remove('is-valid')
        password.classList.add('is-invalid')
        isValid = false
    }
    else{
        password.classList.remove('is-invalid')
        password.classList.add('is-valid')
    }

    if(fullName.value.length < 5){
        fullName.classList.remove('is-valid')
        fullName.classList.add('is-invalid')
        isValid = false
    }
    else{
        fullName.classList.remove('is-invalid')
        fullName.classList.add('is-valid')
    }

    //=======

    if(!validationEmail(email.value)){
        email.classList.remove('is-valid')
        email.classList.add('is-invalid')
        isValid = false
    }
    else{
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
    }

    if(!validationRA(ra.value) && ra.value != ''){
        ra.classList.remove('is-valid')
        ra.classList.add('is-invalid')
        isValid = false
    }
    else{
        ra.classList.remove('is-invalid')
        ra.classList.add('is-valid')
    }

    if(age.value < 5 || age.value > 150){
        age.classList.remove('is-valid')
        age.classList.add('is-invalid')
        isValid = false
    }
    else{
        age.classList.remove('is-invalid')
        age.classList.add('is-valid')
    }

    if(!validationCPF(cpf.value) && cpf.value != ''){
        cpf.classList.remove('is-valid')
        cpf.classList.add('is-invalid')
        isValid = false
    }
    else{
        cpf.classList.remove('is-invalid')
        cpf.classList.add('is-valid')
    }

    edu.classList.add('is-valid')

    return isValid
}

function buttonCreateUser(){
    let username = document.getElementById('floatingUsername'),
        password = document.getElementById('floatingPassword'),
        fullName = document.getElementById('floatingFullName'),
        email = document.getElementById('floatingEmail'),
        ra = document.getElementById('floatingRA'),
        age = document.getElementById('floatingAge'),
        cpf = document.getElementById('floatingCPF'),
        edu = document.getElementById('floatingEdu')

    if(isValid(username, password, fullName, email, ra, age, cpf, edu)){
        
        postData(_pathSignup, {
            username: username.value,
            password: password.value,
            fullName: fullName.value,
            email: email.value,
            ra: ra.value,
            age: age.value,
            cpf: cpf.value,
            edu: edu.value
        }).then(res => {
            if(res.err){
                document.getElementById('errLabel').innerHTML = res.message
                new bootstrap.Modal(document.getElementById('modalFail'), {
                    keyboard: false
                }).show()
            }
            else{
                new bootstrap.Modal(document.getElementById('modalSuccess'), {
                    keyboard: false
                }).show()
            }
        })
    }

}

document.getElementById('buttonEye').addEventListener('mousedown', () => {
	document.getElementById('floatingPassword').type = 'text';
    document.getElementById("iconEye").classList.remove('fa-eye-slash');
	document.getElementById("iconEye").classList.add('fa-eye');
});

document.getElementById('buttonEye').addEventListener('mouseup', () => {
	document.getElementById('floatingPassword').type = 'password';
    document.getElementById("iconEye").classList.remove('fa-eye');
	document.getElementById("iconEye").classList.add('fa-eye-slash');
});

// Para que o password não fique exposto apos mover a imagem.
document.getElementById('buttonEye').addEventListener('mousemove', () => {
	document.getElementById('floatingPassword').type = 'password';
    document.getElementById("iconEye").classList.remove('fa-eye');
	document.getElementById("iconEye").classList.add('fa-eye-slash');
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})