const Group = require('../../models/Group.model');
const Module = require('../../models/Module.model');

//renewAll()
//updateModules()

function renewAll(){
    Group.deleteMany().then((resDeleted) => {
        console.log(resDeleted)

        Module.find().then((allModulesDB) => {

            for(let groupNum = 0; groupNum < 20; groupNum++){
                const groupOne = {
                    groupNum: groupNum + 1,
                    groupId: (groupNum + 1) * (groupNum + 1) + 10,
                    modules: allModulesDB,
                }
                
                new Group(groupOne).save().then(() => {
                    console.log('Ok');
                }).catch((err) => {
                    console.log('---> Save Group Error <---\n' + err)
                });
            }
        }).catch((err) => {
            console.log('---> Find Modules Error <---\n' + err)
        })
    }).catch((err) => {
        console.log('---> Delete Many Groups Error <---\n' + err)
    })
}

function updateModules(){
    Module.find().then((allModulesDB) => {

        Group.updateMany({},{modules: allModulesDB}).then((resUpdate) => {
            console.log(resUpdate)
        }).catch((err) => {
            console.log('---> Update Modules Error <---\n' + err)
        })    
    }).catch((err) => {
        console.log('---> Find Modules Error <---\n' + err)
    })
}
