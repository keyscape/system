const _pathJoinGroup = '/room10c/joinGroup/'

document.getElementById('navItem10c').classList.add('active');

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

function joinGroup(){
    postData(_pathJoinGroup, {code: document.getElementById('floatingCode').value}).then(res => {

        if(res.err){
            document.getElementById('floatingCode').classList.add('is-invalid')
        }
        else location.reload()

    }).catch(err => {
        console.log(err)
    })

}