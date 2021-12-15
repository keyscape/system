//const dataEscape = require('../modules/infos');
const Team = require('../models/Team.model');
const Room = require('../models/Room.model');
const Contact = require('../models/Contact.model');
const Event = require('../models/Event.model');
const Config = require('../models/Config.model');

const dataToEscape = require('../modules/dataToEscape.json');

const fs = require('fs');

module.exports = {
	get: (req, res) => {

		Config.find().then((configAll) => {

			if(configAll[0].updateNow){

				Team.find({isActive: true}).then((teamAll) => {
					Room.find().then((roomAll) => {
						Contact.find().then((contactAll) => {
							Event.find().then((eventAll) => {
	
								teamAll.sort((a, b) => (a.sequence > b.sequence) ? 1 : -1)
								roomAll.sort((a, b) => (a.sequence > b.sequence) ? 1 : -1)

								let dataToEscapeNew = {title: 'Keyscape', team: teamAll, rooms: roomAll, contact: contactAll, events: eventAll, config: configAll}
								
								fs.writeFileSync('app/modules/dataToEscape.json', JSON.stringify(dataToEscapeNew));
	
								res.render('index', dataToEscapeNew);
	
	
							}).catch((err) => {
								console.log('---> Find Event Error <---\n' + err)
							})
	
						}).catch((err) => {
							console.log('---> Find Contact Error <---\n' + err)
						})
	
					}).catch((err) => {
						console.log('---> Find Room Error <---\n' + err)
					})
	
				}).catch((err) => {
					console.log('---> Find Team Error <---\n' + err)
				})

			}

			else{
				res.render('index', dataToEscape);
			}

		}).catch((err) => {
			console.log('---> Find Team Error <---\n' + err)
		})
	},
};




