/* Módulos */
require('dotenv').config(); /* Configuração das variáveis de ambiente */
const app = require('./configs/app'); /* Configuração do app */
require('./configs/database'); /* Configuração do BD */

const indexRouter = require('./app/routes/index.route'); /* Importa a rota / */
const system10cIndexRouter = require('./app/routes/system10c/index.route'); /* Importa a rota /romm10c */
const system10cLoginRouter = require('./app/routes/system10c/login.route'); /* Importa a rota /romm10c/login */
const system10cLogoutRouter = require('./app/routes/system10c/logout.route'); /* Importa a rota /romm10c/logout */
const system10cSignupRouter = require('./app/routes/system10c/signup.route'); /* Importa a rota /romm10c/signup */
const system10cGroupRouter = require('./app/routes/system10c/group.route'); /* Importa a rota /romm10c/group */
const system10cJoinGroupRouter = require('./app/routes/system10c/joinGroup.route'); /* Importa a rota /romm10c/joinGroup */
const system10cUserRouter = require('./app/routes/system10c/user.route'); /* Importa a rota /romm10c/user */
const system10cAdminRouter = require('./app/routes/system10c/admin.route'); /* Importa a rota /romm10c/joinGroup */
const system10cTestModule = require('./app/routes/system10c/test.route'); /* Importa a rota /romm10c/test/module */

//require('./app/modules/init/module.init')
//require('./app/modules/init/omega.init')
//require('./app/modules/init/voice.init')
//require('./app/modules/init/option.init')

/* Constante */
const PORT = process.env.NODE_ENV === 'production' ? process.env.PORT : 3000; /* Define a porta na qual a aplicação vai rodar */

/* Rotas */
app.use(indexRouter); /* Adiciona ao middleware a rota / */
app.use(system10cIndexRouter); /* Adiciona ao middleware a rota /romm10c */
app.use(system10cLoginRouter); /* Adiciona ao middleware a rota /romm10c/login */
app.use(system10cLogoutRouter); /* Adiciona ao middleware a rota /romm10c/logout */
app.use(system10cSignupRouter); /* Adiciona ao middleware a rota /romm10c/signup */
app.use(system10cGroupRouter); /* Adiciona ao middleware a rota /romm10c/group */
app.use(system10cJoinGroupRouter); /* Adiciona ao middleware a rota /romm10c/joinGroup */
app.use(system10cUserRouter); /* Adiciona ao middleware a rota /romm10c/user */
app.use(system10cAdminRouter); /* Adiciona ao middleware a rota /romm10c/admin */
app.use(system10cTestModule); /* Adiciona ao middleware a rota /romm10c/test/module */

/* Abre o servidor na porta especificada */
app.listen(PORT, () => {
	console.log(
		'\n##### -- Server Running: Success\nLink: http://localhost:' +
			PORT +
			'\n'
	);
});


//const bcrypt =  require('bcryptjs')

//console.log(bcrypt.hashSync("teste123"))