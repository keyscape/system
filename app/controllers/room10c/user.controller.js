const User = require('../../models/User.model')

const bcrypt =  require('bcryptjs')

module.exports = {
    get: (req, res) => {
        res.render('user', {title: '10Conectados | Usuário', pathFile: 'system10/', generalClass: 'user', user: req.user})


    },
    post: async (req, res) => {
        try{
            let oneUser = await User.findById(req.body.idUser)
    
            delete req.body.idUser
            
            if(req.body.password){
                if(bcrypt.compareSync(req.body.password, oneUser.passwordHash)){
                    oneUser.passwordHash = bcrypt.hashSync(req.body.passwordNew)
                }
                else throw 'Erro: A senha antiga não confere'
            }
            else if(req.body.username){
                let usernameExists = await User.exists({username: req.body.username})
                
                if(!usernameExists){
                    oneUser.username = req.body.username
                }
                else throw 'Erro: O nome de usuário já existe'
            }
            else{
                const keyToSave = Object.keys(req.body)[0]
                oneUser[keyToSave] = req.body[keyToSave]
            }
    
            await oneUser.save()

            res.end('{"err": false}')
            
        }
        catch(err){
            console.log('Errrrrrrr: ' + err)
            res.end('{"err": true, "message": "' + err + '"}')
        }

        

    }
}