const Team = require('../../models/Team.model');
const Contact = require('../../models/Contact.model');
const Event = require('../../models/Event.model');
const Room = require('../../models/Room.model');
const Config = require('../../models/Config.model');


//const dataEscape = require('../infos');


/* 
new Module(moduleOne).save().then(() => {
    console.log('Ok');
}).catch((err) => {
    console.log('---> Save Module Error <---\n' + err)
});
 */

//createTeam(dataEscape.team)
//createContact(dataEscape.contact)
//createEvent(dataEscape.event)
//createRoom(dataEscape.room)
//createConfig(dataEscape.config)

//deleteRoom()

function createTeam(team){
    for (teamOne of team){
         new Team(teamOne).save().then(() => {
        }).catch((err) => {
            console.log('---> Save Team Error <---\n' + err)
        });
    }
}

function createContact(contact){
    for (contactOne of contact){
        new Contact(contactOne).save().then(() => {
       }).catch((err) => {
           console.log('---> Save Contact Error <---\n' + err)
       });
   }
}

function createEvent(event){
    for (eventOne of event){
        new Event(eventOne).save().then(() => {
       }).catch((err) => {
           console.log('---> Save Event Error <---\n' + err)
       });
   }
}

function createRoom(room){
    for (roomOne of room){
        new Room(roomOne).save().then(() => {
       }).catch((err) => {
           console.log('---> Save Room Error <---\n' + err)
       });
   }
}

function createConfig(config){
    new Config(config).save().then(() => {
    }).catch((err) => {
        console.log('---> Save Config Error <---\n' + err)
    });

}

function deleteRoom(){
    Room.deleteMany().then((resDeleted) => {
        console.log(resDeleted)
    }).catch((err) => {
        console.log('---> Delete Room Error <---\n' + err)
    });
}
