const Omega = require('../../models/Omega.model');

const omegaAns = [
    {
        module: {
            name: 'Epsilon',
            letter: 'ε',
        },
        question: '<img class="img-fluid" width="80%" src="/system10/assets/omega/img1.jpg">',
        alternatives: [
            {
                letter: 'a',
                content: 'Dois pássaros perto de uma flor',
                value: [0.0, 0.0],
            },
            {
                letter: 'b',
                content: 'Homem de bigode e barba',
                value: [0.0, 0.0],
            },
            {
                letter: 'c',
                content: 'Mancha de tinta com formato abstrato',
                value: [0.0, 0.0],
            },
            {
                letter: 'd',
                content: 'Parece um ser que conversou comigo num sonho ano passado',
                value: [0.0, 0.0],
            },
        ]
    },
    {
        module: {
            name: 'Zeta',
            letter: 'ζ',
        },
        question: 'As decisões financeiras da Expoente são sugeridas por Euler. O que ele deveria sugerir para fazer com lucros inesperados?',
        alternatives: [
            {
                letter: 'a',
                content: 'Separar uma parte do lucro para investir em programas sociais, melhorando a imagem da Expoente',
                value: [4.7, 1.2],
            },
            {
                letter: 'b',
                content: 'Criar um fundo para auxiliar regiões em calamidade, melhorando a imagem da Expoente',
                value: [2.0, 2.8],
            },
            {
                letter: 'c',
                content: 'Investir no setor de pesquisa da própria empresa',
                value: [3.3, 2.0],
            },
            {
                letter: 'd',
                content: 'Dividir o lucro entre os acionistas e a diretoria, para que se animem a sempre investir em novas tecnologias',
                value: [0.0, 4.0],
            },
        ]
    },
    {
        module: {
            name: 'Pi',
            letter: 'π',
        },
        question: 'No ramo de entregas da Expoente, é comum pacotes serem enviados por caminhos alternativos. Qual dos serviços abaixo é mais vantajoso?',
        alternatives: [
            {
                letter: 'a',
                content: 'Utilizar serviço terceirizado',
                value: [1.4, 3.1],
            },
            {
                letter: 'b',
                content: 'Contratar seu próprio sistema de transporte, independente se ficar mais caro, para estimular a economia',
                value: [5.0, 1.2],
            },
            {
                letter: 'c',
                content: 'Treinar pombos correio, como manobra de marketing',
                value: [0.0, 3.8],
            },
            {
                letter: 'd',
                content: 'Adquirir uma startup de drones, e criar uma rede para realizar o transporte',
                value: [3.6, 1.9],
            },
        ]
    },
    {
        module: {
            name: 'Rô',
            letter: 'ρ',
        },
        question: 'O site de busca gerido por Euler recebe a seguinte pergunta "A empresa Expoente é ...". Como Euler deveria autocompletar essa pergunta?',
        alternatives: [
            {
                letter: 'a',
                content: '"muito bem intencionada, apesar de cometer erros, como toda empresa"',
                value: [2.0, 3.0],
            },
            {
                letter: 'b',
                content: '“... maligna, e deve ser fechada”',
                value: [4.0, 1.0],
            },
            {
                letter: 'c',
                content: '“uma empresa como outra qualquer, faz o que pode para agradar ao público”',
                value: [3.0, 2.0],
            },
            {
                letter: 'd',
                content: '"incrível"',
                value: [1.0, 4.0],
            },
        ]
    },
    {
        module: {
            name: 'Tau',
            letter: 'τ',
        },
        question: 'Um passarinho pousa sobre uma árvore, num dia de vento. Uma criança brinca com um balão perto da árvore, e acaba soltando o balão. O que acontece com o balão?',
        alternatives: [
            {
                letter: 'a',
                content: 'O balão não é com gás hélio, ele cai no chão',
                value: [0.0, 0.0],
            },
            {
                letter: 'b',
                content: 'O balão não é com gás hélio, ele cai no chão e estoura na grama',
                value: [0.0, 0.0],
            },
            {
                letter: 'c',
                content: 'O balão está com gás hélio, e sobe pelo ar. O passarinho é indiferente à cena',
                value: [0.0, 0.0],
            },
            {
                letter: 'd',
                content: 'O balão fica preso em galhos da árvore. O passarinho se assusta, voa e vai embora',
                value: [0.0, 0.0],
            },
        ]
    },
    {
        module: {
            name: 'Fi',
            letter: 'φ',
        },
        question: 'Em um dos vários centros de processamento de dados da Expoente, Euler descobriu que havia um grande “gato” de energia para uma comunidade carente, onde várias crianças vivem em situação de miséria. O que Euler deveria sugerir?',
        alternatives: [
            {
                letter: 'a',
                content: 'Cortar o “gato”, e reforçar a segurança',
                value: [0.0, 5.9],
            },
            {
                letter: 'b',
                content: 'Criar um programa para auxiliar as famílias, para que não precisem do “gato”, o que também melhoraria a imagem da Expoente',
                value: [2.2, 2.9],
            },
            {
                letter: 'c',
                content: 'Ignorar o “gato”, e deixar tudo como está',
                value: [3.5, 1.2],
            },
            {
                letter: 'd',
                content: 'Diminuir o consumo de energia do centro, para que não percebam que o “gato” rouba energia',
                value: [4.3, 0.0],
            },
        ]
    },
    {
        module: {
            name: 'Chi',
            letter: 'χ',
        },
        question: 'Expoente controla a maior rede social do país de Zamunda. As eleições estão próximas, e o presidente com maior apoio popular é um conhecido traficante de armas e responsável por vários crimes internacionais. Se ele entrar, a Expoente poderá perder espaço no país. Euler, na rede social, deve:',
        alternatives: [
            {
                letter: 'a',
                content: 'Ficar neutro',
                value: [3.3, 2.0],
            },
            {
                letter: 'b',
                content: 'Mostrar postagens que denunciam os crimes do provável novo presidente',
                value: [4.0, 1.6],
            },
            {
                letter: 'c',
                content: 'Mostrar postagens que melhoram a imagem do candidato da Expoente',
                value: [2.7, 2.4],
            },
            {
                letter: 'd',
                content: 'Proibir postagens sobre política, ao mesmo tempo que em seu mecanismo de busca mostra somente páginas a favor do candidato da Expoente',
                value: [0.0, 4.0],
            },
        ]
    }
]

async function initOmega(){
    try{
        await Omega.insertMany(omegaAns)
    
        console.log('---> Insert Omega OK <---')
    }
    catch(err){
        console.log('---> Insert Omega Error <---\n' + err)
    }

}

async function deleteOmega(){
    try{
        await Omega.deleteMany()
    
        console.log('---> Delete Omega OK <---')
    }
    catch(err){
        console.log('---> Delete Omega Error <---\n' + err)
    }

}

async function renewAll(){
    try{
        await Omega.deleteMany()

        console.log('---> Delete Omega OK <---')

        await Omega.insertMany(omegaAns)

        console.log('---> Create Omega OK <---')
    }
    catch(err){
        console.log('---> Omega Error <---\n' + err)
    }
}

//initOmega()
//deleteOmega()
renewAll()