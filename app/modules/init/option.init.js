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
    mi: {
        alt: [
            {
                name: 'Cargo',
                opt: ['CEO', 'Chefe de TI', 'Gerente de Projetos', 'Gestão de Pessoas', 'Zelador'],
            },
            {
                name: 'E-mail',
                opt: ['jinx', 'rogersilva', 'sandro_expo', 'silvisantos', 'silv_expo'],
            },
            {
                name: 'Telefone',
                opt: ['xxxxx-0391', 'xxxxx-2554', 'xxxxx-4747', 'xxxxx-7990', 'xxxxx-6579'],
            },
            {
                name: 'Bebida',
                opt: ['Água', 'Café', 'Chá', 'Refrigerante', 'Suco'],
            }
        ],
        res: [
            {
                name: 'Silvio',
                opt: ['0', '4', '2', '1']
            },
            {
                name: 'Roger',
                opt: ['4', '1', '1', '4']
            },
            {
                name: 'Julia',
                opt: ['1', '0', '0', '2']
            },
            {
                name: 'Sandro',
                opt: ['2', '2', '4', '3']
            },
            {
                name: 'Silvia',
                opt: ['3', '3', '3', '0']
            },
        ]
    },
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