const Module = require('../../models/Module.model');

const moduleAll = [
    {
        name: 'lambda',
        letter: 'λ',
        phase: 'mid2',
        isDone: false
    },
    {
        name: 'beta',
        letter: 'β',
        phase: 'mid1',
        isDone: false
    },
    {
        name: 'psi',
        letter: 'ψ',
        phase: 'mid1',
        isDone: false
    },
    {
        name: 'alfa',
        letter: 'α',
        phase: 'init',
        isDone: false
    },
    {
        name: 'kappa',
        letter: 'κ',
        phase: 'init',
        isDone: false
    },
    {
        name: 'mi',
        letter: 'μ',
        phase: 'init',
        isDone: false
    },
    {
        name: 'sigma',
        letter: 'σ',
        phase: 'init',
        isDone: false
    },
    {
        name: 'gama',
        letter: '𝜸',
        phase: 'init',
        isDone: false
    }
]

renewAll()

async function renewAll(){

    try{
        await Module.deleteMany()

        console.log('---> Delete Module OK <---')

        await Module.insertMany(moduleAll)

        console.log('---> Create Modules OK <---')

    }
    catch(err){
        console.log('---> Modules Error <---\n' + err)
    }
}


