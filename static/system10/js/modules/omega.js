function omegaSubmit(resPerson){
    console.log()
    requestGetAjax(pathModuleOmegaNext, document.getElementById('code88').value + '/' + document.getElementById('namePerson').value + '/' + document.getElementById('omegaPhase').value + '/' + resPerson).then((resData) => {
        if(resData.res == 'loading'){
            document.getElementById('omegaContent').classList.add('d-none')
            document.getElementById('omegaLoading').classList.remove('d-none')
        }
    });
}