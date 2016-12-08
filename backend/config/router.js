module.exports = (router) => {
    router.all('*', (req, res) => {
        res.redirect('/');
    })

    return router;
}
