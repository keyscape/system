const Module = require('../../models/Module.model')
const miModule = require('../../modules/init/miModule')

module.exports = {
    get: async (req, res) => {
        try{
            //let oneModule = await Module.findOne({name: req.params.name}).lean(),

            
            if(req.params.name.length == req.params.code[0] && req.params.name[0] == req.params.code[1] && req.params.name[req.params.name.length - 1] == req.params.code[2]){
                let oneModule = {
                    name: req.params.name,
                    letter: 'αβγδζλξφΩ',
                    path: 'system10/modules/' + req.params.name + 'Module',
                    specificClass: 'aryabhata'
                },
                    miModuleContent = {},
                    whatModule = {}
        
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
        
                res.render('test', {title: '10Conectados | Teste', pathFile: 'system10/', generalClass: 'test', oneModule, miModuleContent, whatModule})
            }
            else throw 'Errouuu'
            

        }
        catch(err){
            res.render('err', {title: '10Conectados | Erro', pathFile: 'system10/', generalClass: 'test'})
        }
    }
}