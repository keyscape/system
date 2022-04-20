/* Módulos */
require('dotenv').config(); /* Configuração das variáveis de ambiente */
const app = require('./configs/app'); /* Configuração do app */
require('./configs/database'); /* Configuração do BD */

const indexRouter = require('./app/routes/index.route'); /* Importa a rota / */
const room10cIndexRouter = require('./app/routes/room10c/index.route'); /* Importa a rota /romm10c */
const room10cLoginRouter = require('./app/routes/room10c/login.route'); /* Importa a rota /romm10c/login */
const room10cLogoutRouter = require('./app/routes/room10c/logout.route'); /* Importa a rota /romm10c/logout */
const room10cSignupRouter = require('./app/routes/room10c/signup.route'); /* Importa a rota /romm10c/signup */
const room10cGroupRouter = require('./app/routes/room10c/group.route'); /* Importa a rota /romm10c/group */
const room10cJoinGroupRouter = require('./app/routes/room10c/joinGroup.route'); /* Importa a rota /romm10c/joinGroup */
const room10cUserRouter = require('./app/routes/room10c/user.route'); /* Importa a rota /romm10c/user */
const room10cAdminRouter = require('./app/routes/room10c/admin.route'); /* Importa a rota /romm10c/joinGroup */
const room10cTestModule = require('./app/routes/room10c/test.route'); /* Importa a rota /romm10c/test/module */

//require('./app/modules/init/module.init')
//require('./app/modules/init/omega.init')
//require('./app/modules/init/voice.init')
//require('./app/modules/init/option.init')

/* Constante */
const PORT = process.env.NODE_ENV === 'development' ? process.env.PORT : 80; /* Define a porta na qual a aplicação vai rodar */

/* Rotas */
app.use(indexRouter); /* Adiciona ao middleware a rota / */
app.use(room10cIndexRouter); /* Adiciona ao middleware a rota /romm10c */
app.use(room10cLoginRouter); /* Adiciona ao middleware a rota /romm10c/login */
app.use(room10cLogoutRouter); /* Adiciona ao middleware a rota /romm10c/logout */
app.use(room10cSignupRouter); /* Adiciona ao middleware a rota /romm10c/signup */
app.use(room10cGroupRouter); /* Adiciona ao middleware a rota /romm10c/group */
app.use(room10cJoinGroupRouter); /* Adiciona ao middleware a rota /romm10c/joinGroup */
app.use(room10cUserRouter); /* Adiciona ao middleware a rota /romm10c/user */
app.use(room10cAdminRouter); /* Adiciona ao middleware a rota /romm10c/admin */
app.use(room10cTestModule); /* Adiciona ao middleware a rota /romm10c/test/module */

/* Abre o servidor na porta especificada */
app.listen(PORT, () => {
	console.log(
		'\n##### -- Server Running: Success\nLink: http://localhost:' +
			PORT +
			'\n'
	);
});
