const Option = require('../../models/Option.model');

const option = {
    phases: [
        'init',
        'mid1',
        'mid2',
        'delta',
        'omega',
        'done',
    ],
    diffToFinalC: 1.5
}

async function initOtion(){
    try{
        await Option.insertOne(option)
        console.log('---> Create Option OK <---\n')
    }
    catch(err){
        console.log('---> Create Option Error <---\n' + err)
    }

}

async function deleteOption(){
    try{
        await Option.deleteMany()
        console.log('---> Delete Option OK <---\n')
    }
    catch(err){
        console.log('---> Delete Option Error <---\n' + err)
    }
}

async function renewAll(){
    try{
        await Option.deleteMany()

        console.log('---> Delete Option OK <---')

        await Option.insertMany(option)

        console.log('---> Create Option OK <---')
    }
    catch(err){
        console.log('---> Option Error <---\n' + err)
    }
}

renewAll()