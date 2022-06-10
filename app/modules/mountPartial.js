const   fs = require('fs'),
        exphbs = require('express-handlebars'), /* Importa o módulo express-handlebars */
        process = require('process');

var hbs = exphbs.create({});

console.log('\n##### -- Path process.cwd()\n' + process.cwd())
console.log('\n##### -- Path __dirname\n' + __dirname + '\n')

if(process.env.NODE_ENV === 'production'){
    hbs.handlebars.registerPartial('adminParticipants', hbs.handlebars.compile(fs.readFileSync('/opt/system/app/views/partials/system10c/adminParticipants.handlebars').toString('utf-8')));
    hbs.handlebars.registerPartial('adminModules', hbs.handlebars.compile(fs.readFileSync('/opt/system/app/views/partials/system10c/adminModules.handlebars').toString('utf-8')));
    hbs.handlebars.registerPartial('adminGroups', hbs.handlebars.compile(fs.readFileSync('/opt/system/app/views/partials/system10c/adminGroups.handlebars').toString('utf-8')));
}
else{
    hbs.handlebars.registerPartial('adminParticipants', hbs.handlebars.compile(fs.readFileSync(process.cwd() + '/app/views/partials/system10c/adminParticipants.handlebars').toString('utf-8')));
    hbs.handlebars.registerPartial('adminModules', hbs.handlebars.compile(fs.readFileSync(process.cwd() + '/app/views/partials/system10c/adminModules.handlebars').toString('utf-8')));
    hbs.handlebars.registerPartial('adminGroups', hbs.handlebars.compile(fs.readFileSync(process.cwd() + '/app/views/partials/system10c/adminGroups.handlebars').toString('utf-8')));
}

module.exports = {
    createAdminParticipants: (allParticipants) => {
        return hbs.handlebars.partials['adminParticipants'](allParticipants)
    },
    createAdminModules: (allModules) => {
        return hbs.handlebars.partials['adminModules'](allModules)
    },
    createAdminGroups: (allGroups) => {
        return hbs.handlebars.partials['adminGroups'](allGroups)
    }
}

