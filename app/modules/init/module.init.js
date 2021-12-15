const Module = require('../../models/Module.model');

const moduleAll = [
    {
        name: 'alfa',
        letter: 'α',
        phase: 0
    },
    {
        name: 'kappa',
        letter: 'κ',
        phase: 0
    },
    {
        name: 'mi',
        letter: 'μ',
        phase: 0
    },
    {
        name: 'sigma',
        letter: 'σ',
        phase: 0
    },
    {
        name: 'gama',
        letter: '𝜸',
        phase: 0
    },
    {
        name: 'psi',
        letter: 'ψ',
        phase: 1
    },
    {
        name: 'beta',
        letter: 'β',
        phase: 3
    },
    {
        name: 'delta',
        letter: 'δ',
        phase: 77
    },
    {
        name: 'omega',
        letter: 'Ω',
        phase: 88,
        content: {
            phase0: [
                '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/X5Q8TAz5AzA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h6 class="mt-2 mb-0">EULER RELIGOU!<br>Para terminar de reiniciá-lo, vocês devem orientar algumas diretrizes, respondendo questões do módulo "ômega". A partir deste ponto, as perguntas não seguem a mesma lógica, e não existe "certo" ou "errado".<br>Vocês definirão qual será o futuro de Euler...</h6>',
                'Prócimo',
                'Próssimo',
                'Próximo',
                'Próçimo',
            ],
            phase1: [
                'As decisões financeiras da Expoente são sugeridas por Euler. O que ele deveria sugerir para fazer com lucros inesperados?',
                'Separar uma parte do lucro para investir em programas sociais, melhorando a imagem da Expoente',
                'Criar um fundo para auxiliar regiões em calamidade, melhorando a imagem da Expoente',
                'Investir no setor de pesquisa da própria empresa',
                'Dividir o lucro entre os acionistas e a diretoria, para que se animem a sempre investir em novas tecnologias',
            ],
            phase2: [
                'No ramo de entregas da Expoente, é comum pacotes serem enviados por caminhos alternativos. Qual dos serviços abaixo é mais vantajoso?',
                'Utilizar serviço terceirizado',
                'Contratar seu próprio sistema de transporte, independente se ficar mais caro, para estimular a economia',
                'Treinar pombos correio, como manobra de marketing',
                'Adquirir uma startup de drones, e criar uma rede para realizar o transporte',
            ],
            phase3: [
                'O site de busca gerido por Euler recebe a seguinte pergunta "A empresa Expoente é ...". Como Euler deveria autocompletar essa pergunta?',
                '"muito bem intencionada, apesar de cometer erros, como toda empresa"',
                '“... maligna, e deve ser fechada”',
                '“uma empresa como outra qualquer, faz o que pode para agradar ao público”',
                '"incrível"',
            ],
            phase4: [
                'Um passarinho pousa sobre uma árvore, num dia de vento. Uma criança brinca com um balão perto da árvore, e acaba soltando o balão. O que acontece com o balão?',
                'O balão não é com gás hélio, ele cai no chão',
                'O balão não é com gás hélio, ele cai no chão e estoura na grama',
                'O balão está com gás hélio, e sobe pelo ar. O passarinho é indiferente à cena',
                'O balão fica preso em galhos da árvore. O passarinho se assusta, voa e vai embora',
            ],
            phase5: [
                'Em um dos vários centros de processamento de dados da Expoente, Euler descobriu que havia um grande “gato” de energia para uma comunidade carente, onde várias crianças vivem em situação de miséria. O que Euler deveria sugerir?',
                'Cortar o “gato”, e reforçar a segurança',
                'Criar um programa para auxiliar as famílias, para que não precisem do “gato”, o que também melhoraria a imagem da Expoente',
                'Ignorar o “gato”, e deixar tudo como está',
                'Diminuir o consumo de energia do centro, para que não percebam que o “gato” rouba energia',
            ],
            phase6: [
                'Expoente controla a maior rede social do país de Zamunda. As eleições estão próximas, e o presidente com maior apoio popular é um conhecido traficante de armas e responsável por vários crimes internacionais. Se ele entrar, a Expoente poderá perder espaço no país. Euler, na rede social, deve:',
                'Ficar neutro',
                'Mostrar postagens que denunciam os crimes do provável novo presidente',
                'Mostrar postagens que melhoram a imagem do candidato da Expoente',
                'Proibir postagens sobre política, ao mesmo tempo que em seu mecanismo de busca mostra somente páginas a favor do candidato da Expoente',
            ]

        },
        resContent: {
            phase0: [[0.0, 0.0], [0.0, 0.0], [0.0, 0.0], [0.0, 0.0]],
            phase1: [[4.7, 1.2], [2.0, 2.8], [3.3, 2.0], [0.0, 4.0]],
            phase2: [[1.4, 3.1], [5.0, 1.2], [0.0, 3.8], [3.6, 1.9]],
            phase3: [[2.0, 3.0], [4.0, 1.0], [3.0, 2.0], [1.0, 4.0]],
            phase4: [[0.0, 0.0], [0.0, 0.0], [0.0, 0.0], [0.0, 0.0]],
            phase5: [[0.0, 5.9], [2.2, 2.9], [3.5, 1.2], [4.3, 0.0]],
            phase6: [[3.3, 2.0], [4.0, 1.6], [2.7, 2.4], [0.0, 4.0]],
        }
    }

]

//renewAll()

function renewAll(){
    Module.deleteMany().then((resDeleted) => {
        console.log(resDeleted)

        for (moduleOne of moduleAll){
            new Module(moduleOne).save().then(() => {
                console.log('Ok');
            }).catch((err) => {
                console.log('---> Save Module Error <---\n' + err)
            });
        }

    }).catch((err) => {
        console.log('---> Delete Many Modules Error <---\n' + err)
    })
}


