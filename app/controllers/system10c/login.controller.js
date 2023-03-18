module.exports = {
    get: (req, res) => {

        res.render('login10c', {title: '10Conectados', pathFile: 'system10c/', generalClass: 'login', err: req.query.err == '', assetsVersion: process.env.ASSETS_VERSION})

    }
}