const Voice = require('../../models/Voice.model');

const voices = [
    {
        name: 'gauss',
        intro: '-1',
        omega: '-1',
        finalA: '-1',
        finalB: '-1',
        finalC: '-1',
    },
    {
        name: 'lovelace',
        intro: 'Oy0t6veOB-c',
        omega: 'X5Q8TAz5AzA',
        finalA: 'MzZR9UOochU',
        finalB: 'WWKxBKwUqMk',
        finalC: '5ubAt-4AfLY',
    },
]

async function initVoice(){
    try{
        await Voice.insertMany(voices)
        console.log('---> Create Voices OK <---\n')
    }
    catch(err){
        console.log('---> Create Voices Error <---\n' + err)
    }

}

async function deleteVoices(){
    try{
        await Voice.deleteMany()
        console.log('---> Delete Voices OK <---\n')
    }
    catch(err){
        console.log('---> Delete Voices Error <---\n' + err)
    }
}

async function renewAll(){
    try{
        await Voice.deleteMany()

        console.log('---> Delete Voices OK <---')

        await Voice.insertMany(voices)

        console.log('---> Create Voices OK <---')
    }
    catch(err){
        console.log('---> Voices Error <---\n' + err)
    }
}

//initVoice()
//deleteVoices()
renewAll()