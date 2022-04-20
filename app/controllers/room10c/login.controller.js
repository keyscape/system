module.exports = {
    get: (req, res) => {

        res.render('login10c', {title: '10Conectados', pathFile: 'system10/', generalClass: 'login', err: req.query.err == ''})

    }
}