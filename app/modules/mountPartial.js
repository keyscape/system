const fs = require('fs');

const exphbs = require('express-handlebars'); /* Importa o módulo express-handlebars */

var hbs = exphbs.create({});
/* 
hbs.handlebars.registerPartial('adminParticipants', hbs.handlebars.compile(fs.readFileSync(process.cwd() + '/app/views/partials/system10/adminParticipants.handlebars').toString('utf-8')));
hbs.handlebars.registerPartial('adminModules', hbs.handlebars.compile(fs.readFileSync(process.cwd() + '/app/views/partials/system10/adminModules.handlebars').toString('utf-8')));
hbs.handlebars.registerPartial('adminGroups', hbs.handlebars.compile(fs.readFileSync(process.cwd() + '/app/views/partials/system10/adminGroups.handlebars').toString('utf-8')));
 */
hbs.handlebars.registerPartial('adminParticipants', hbs.handlebars.compile(fs.readFileSync('/opt/system/app/views/partials/system10/adminParticipants.handlebars').toString('utf-8')));
hbs.handlebars.registerPartial('adminModules', hbs.handlebars.compile(fs.readFileSync('/opt/system/app/views/partials/system10/adminModules.handlebars').toString('utf-8')));
hbs.handlebars.registerPartial('adminGroups', hbs.handlebars.compile(fs.readFileSync('/opt/system/app/views/partials/system10/adminGroups.handlebars').toString('utf-8')));

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

