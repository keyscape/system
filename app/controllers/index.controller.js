const Content = require('../models/Content.model');

module.exports = {
	get: async (req, res) => {

		let contentAll = await Content.findOne().lean()

		let newPeopleArray = []

		contentAll.team.people.forEach(onePerson => {
			if(onePerson.isActive) newPeopleArray.push(onePerson) 
		});

		contentAll.team.people = newPeopleArray

		contentAll.team.columns = parseInt(12 / contentAll.team.columns)

		res.render('index', {title: 'Keyscape', ...contentAll, assetsVersion: process.env.ASSETS_VERSION});

	}
};




