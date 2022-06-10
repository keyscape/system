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

function validationUsername(username){
    if(!(/^[0-9a-zA-Z_.-]+$/.test(username.value)) || username.value.length < 3 || username.value.length > 16){
        username.classList.remove('is-valid')
        username.classList.add('is-invalid')
        return false
    }
    else{
        username.classList.remove('is-invalid')
        username.classList.add('is-valid')
        return true
    }
}

function validationPassword(password){

    if(!(/^[0-9a-zA-Z_.@#$%&-]+$/.test(password.value)) || password.value.length < 8 || password.value.length > 16){
        password.classList.remove('is-valid')
        password.classList.add('is-invalid')
        return false
    }
    else{
        password.classList.remove('is-invalid')
        password.classList.add('is-valid')
        return true
    }

}

function validationFullName(fullName){
    if(fullName.value.length < 5){
        fullName.classList.remove('is-valid')
        fullName.classList.add('is-invalid')
        return false
    }
    else{
        fullName.classList.remove('is-invalid')
        fullName.classList.add('is-valid')
        return true
    }


}

function validationEmail(email){
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))){
        email.classList.remove('is-valid')
        email.classList.add('is-invalid')
        return false
    }
    else{
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
        return true
    }

}

function validationRA(ra) {

    let numStr = ra.value
    const numLength = numStr.length;
    let nMult = numLength;
    let sum = 0;
    let resBol = false

    for (let i = 0; i < numLength - 1; i++) {
        sum += parseInt(numStr.charAt(i)) * nMult;
        nMult--;
    }

    let res = (sum * 10) % 11;

    res = res == 10 || res == 11 ? 0 : res;

    resBol = (res == numStr[numLength - 1])


    if(!resBol && ra.value != ''){
        ra.classList.remove('is-valid')
        ra.classList.add('is-invalid')
        return false
    }
    else{
        ra.classList.remove('is-invalid')
        ra.classList.add('is-valid')
        return true
    }
}

function validationCPF(cpf){

    let v = cpf.value;

    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
        cpf.value = v.substring(0, v.length-1);
    }

    cpf.setAttribute("maxlength", "14");

    if (v.length == 3 || v.length == 7) cpf.value += ".";
    if (v.length == 11) cpf.value += "-";

    let numStr = v
    let resBol = false

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

        resBol = (res1 == numStr[numLength - 2] && res2 == numStr[numLength - 1])

    }

    if(!resBol && cpf.value != ''){
        cpf.classList.remove('is-valid')
        cpf.classList.add('is-invalid')
        return false
    }
    else{
        cpf.classList.remove('is-invalid')
        cpf.classList.add('is-valid')
        return true
    }


}

function validationEdu(edu){
    edu.classList.remove('is-invalid')
    edu.classList.add('is-valid')
    return true
}

function validationAge(age){

    if(age.value < 5 || age.value > 150){
        age.classList.remove('is-valid')
        age.classList.add('is-invalid')
        return false
    }
    else{
        age.classList.remove('is-invalid')
        age.classList.add('is-valid')
        return true
    }

}

function isValid(username, password, fullName, email, ra, age, cpf, edu){

    let isValid = true

    if(!validationUsername(username)) isValid = false
    if(!validationPassword(password)) isValid = false
    if(!validationFullName(fullName)) isValid = false
    if(!validationEmail(email)) isValid = false
    if(!validationRA(ra)) isValid = false
    if(!validationAge(age)) isValid = false
    if(!validationCPF(cpf)) isValid = false
    if(!validationEdu(edu)) isValid = false

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