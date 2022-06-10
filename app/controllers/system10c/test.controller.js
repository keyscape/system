const Module = require('../../models/Module.model')
const Voice = require('../../models/Voice.model')
const Omega = require('../../models/Omega.model')
const miModule = require('../../modules/init/miModule')

module.exports = {
    get: async (req, res) => {
        try{

            if(req.params.name.length == req.params.code[0] && req.params.name[0] == req.params.code[1] && req.params.name[req.params.name.length - 1] == req.params.code[2]){
                let oneModule = {
                    name: req.params.name,
                    letter: 'αβγδζλξφΩ',
                    path: 'system10c/modules/' + req.params.name + 'Module',
                    specificClass: 'aryabhata'
                },
                    miModuleContent = {},
                    whatModule = {},
                    allOmegaModuleContent = {}
        
                if(oneModule.name == 'mi') {
                    miModuleContent = miModule()
                    whatModule.mi = true
                }
                else if(['gama', 'beta'].includes(oneModule.name)) {
                    whatModule.gamaBeta = true
                }
                else if(oneModule.name == 'lambda') {
                    whatModule.lambda = true
                }
                else if(oneModule.name == 'omega'){
                    let oneVoice = await Voice.findOne({name: 'lovelace'}).lean(),
                        omegaModuleContent = await Omega.find().lean()

                    allOmegaModuleContent = {videoContent: {intro: oneVoice.intro, omega:oneVoice.omega}, omegaContent: {button: 'warning', showOmega: true}, allOmegas: JSON.stringify(omegaModuleContent), omegaModuleContent, arrayIdOmegaModule: JSON.stringify(omegaModuleContent.map(value => {return value._id}))}

                }
        
                res.render('test', {title: '10Conectados | Teste', pathFile: 'system10c/', generalClass: 'test', oneModule, miModuleContent, whatModule, ...allOmegaModuleContent})
            }
            else throw 'Errouuu'
            

        }
        catch(err){
            res.render('err', {title: '10Conectados | Erro', pathFile: 'system10c/', generalClass: 'test'})
        }
    }
}