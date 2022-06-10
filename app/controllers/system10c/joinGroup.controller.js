const manageParticipant = require('../../modules/manageParticipant')

module.exports = {
    post: async (req, res) => {

        if(await manageParticipant.create({
            idUser: req.user._id,
            codeGroup: req.body.code
        })){
            res.end('{"err": false}')
        }
        else res.end('{"err": true}')


        
    }
}