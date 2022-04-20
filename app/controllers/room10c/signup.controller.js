const User = require('../../models/User.model')

const manageUser = require('../../modules/manageUser')

module.exports = {
    get: (req, res) => {
        res.render('signup10c', {title: '10Conectados | Criar', pathFile: 'system10/', generalClass: 'signup'})
    },
    post: (req, res) => {

        res.end(JSON.stringify(manageUser.create(req.body)))

    }
}