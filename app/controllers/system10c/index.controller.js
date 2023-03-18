const Group = require('../../models/Group.model');
const Participant = require('../../models/Participant.model');

module.exports = {
    get: async (req, res) => {
        let allGroups = await Participant.find({idUser: req.user._id}).lean()
        
        for(oneGroup of allGroups){
            oneGroup.date = oneGroup.date.substr(8,2) + '/' + oneGroup.date.substr(5,2) + '/' + oneGroup.date.substr(0,4)
        }
        
        res.render('main10c', {title: '10Conectados', pathFile: 'system10c/', generalClass: 'control', user: req.user, allGroups, assetsVersion: process.env.ASSETS_VERSION})
        
    }
};
