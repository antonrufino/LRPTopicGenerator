const dataController = require(__dirname + '/../controllers/data-controller');

module.exports = (router) => {
    router.get('/api/data/twitter', dataController.getTwitterTrends);

    router.all('*', (req, res) => {
        res.redirect('/');
    })

    return router;
}
