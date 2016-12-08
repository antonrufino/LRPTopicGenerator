const dataController = require(__dirname + '/../controllers/data-controller');

module.exports = (router) => {
    router.get('/api/trends', dataController.getTrends);

    router.all('*', (req, res) => {
        res.redirect('/');
    })

    return router;
}
