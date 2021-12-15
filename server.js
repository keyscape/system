/* Módulos */
require('dotenv').config(); /* Configuração das variáveis de ambiente */
const app = require('./configs/app'); /* Configuração do app */
const database = require('./configs/database'); /* Configuração do BD */

const indexRouter = require('./app/routes/index.route'); /* Importa a rota / */
const room10cRouter = require('./app/routes/room10c.route'); /* Importa a rota /10c */

//require('./app/modules/init/group.init')
//require('./app/modules/init/module.init')
//require('./app/modules/init/infos.init')

/* Constante */
const PORT = process.env.NODE_ENV === 'development' ? process.env.PORT : 80; /* Define a porta na qual a aplicação vai rodar */

/* Rotas */
app.use(indexRouter); /* Adiciona ao middleware a rota / */
app.use(room10cRouter); /* Adiciona ao middleware a rota /10c */

/* Abre o servidor na porta especificada */
app.listen(PORT, () => {
	console.log(
		'\n##### -- Server Running: Success\nLink: http://localhost:' +
			PORT +
			'\n'
	);
});

/*
for(let num = 0; num < 20; num++){
	let url = 'isqueiperum&' + ((num + 1) * (num + 1) + 10).toString() + '&' + 'user&'
	console.log(url);
}

for(let num = 0; num < 20; num++){
	let url = 'isqueiperum&' + ((num + 1) * (num + 1) + 10).toString() + '&' + 'user&'
	console.log(Buffer.from(url).toString('base64'));
}
*/

