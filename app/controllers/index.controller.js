//const dataEscape = require('../modules/infos');
const Team = require('../models/Team.model');
const Room = require('../models/Room.model');
const Contact = require('../models/Contact.model');
const Event = require('../models/Event.model');


module.exports = {
	get: async (req, res) => {

		Promise.all([
			Team.find({isActive: true}).lean(),
			Room.find().lean(),
			Contact.find().lean(),
			Event.find().lean()
		]).then(allValues => {

			let teamAll = allValues[0],
				roomAll = allValues[1]

				teamAll.sort((a, b) => (a.sequence > b.sequence) ? 1 : -1)
				roomAll.sort((a, b) => (a.sequence > b.sequence) ? 1 : -1)

				res.render('index', {title: 'Keyscape', team: teamAll, rooms: roomAll, contact: allValues[2], events: allValues[3]});

		}).catch(err => {
			console.log(err)
		})
	}
};




